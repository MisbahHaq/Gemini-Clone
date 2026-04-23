// Simple markdown to HTML converter (no external dependency)
function markdownToHtml(text) {
    if (!text) return '';

    return text
        // Escape HTML
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        // Bold: **text** or __text__
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/__(.+?)__/g, '<strong>$1</strong>')
        // Italic: *text* or _text_
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/_(.+?)_/g, '<em>$1</em>')
        // Code: `text`
        .replace(/`(.+?)`/g, '<code>$1</code>')
        // Line breaks
        .replace(/\n/g, '<br>');
}

// OpenRouter API integration - uses OpenAI-compatible format
async function runChat(prompt) {
    try {
        console.log('Sending prompt:', prompt);
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
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
                max_tokens: 40,
            })
        });

        console.log('Response status:', response.status, response.statusText);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || `HTTP error ${response.status}`);
        }

        const message = data.choices?.[0]?.message;
        let content = message?.content;
        if (!content) {
            content = message?.reasoning;
        }

        if (content) {
            // Strip OpenRouter's <environment_details> block and everything after it
            const envTagIndex = content.indexOf('<environment_details>');
            if (envTagIndex !== -1) {
                content = content.substring(0, envTagIndex).trim();
            }
            // Convert markdown to HTML
            content = markdownToHtml(content);
        }

        return content || 'No response content';
    } catch (error) {
        console.error('OpenRouter API error:', error.message);
        throw error;
    }
}

export default runChat;
