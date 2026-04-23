// Simple markdown to HTML converter (no external dependency)
function markdownToHtml(text) {
    if (!text) return '';

    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/__(.+?)__/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/_(.+?)_/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

// Remove all OpenRouter injected content
function cleanOpenRouterText(text) {
    if (!text) return '';

    // Strip everything from <environment_details> onwards
    let cleaned = text.replace(/<environment_details>[\s\S]*/g, '');

    // Strip any system prompts that might have leaked
    cleaned = cleaned.replace(/Current time:[\s\S]*?(\n|$)/g, '');
    cleaned = cleaned.replace(/You are ChatGPT[\s\S]*?(\n|$)/g, '');
    cleaned = cleaned.replace(/Knowledge cutoff:[\s\S]*?(\n|$)/g, '');

    return cleaned.trim();
}

async function runChat(prompt) {
    try {
        let cleanPrompt = cleanOpenRouterText(prompt);

        console.log('Sending prompt:', cleanPrompt);
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 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',
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Gemini Clone',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'google/gemini-2.0-flash-001',
                messages: [{ role: 'user', content: cleanPrompt }],
                temperature: 0.7,
                max_tokens: 200,
            })
        });

        console.log('Response status:', response.status, response.statusText);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || `HTTP error ${response.status}`);
        }

        let content = data.choices?.[0]?.message?.content || '';

        content = cleanOpenRouterText(content);
        content = markdownToHtml(content);

        console.log('Final content:', content);
        return content || 'No response received';
    } catch (error) {
        console.error('OpenRouter API error:', error.message);
        throw error;
    }
}

export default runChat;
