import { createContext, useState, useEffect } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [sessions, setSessions] = useState([]);
    const [currentSessionId, setCurrentSessionId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    // Auto-create a session on mount
    useEffect(() => {
        if (sessions.length === 0) {
            const newSession = {
                id: Date.now(),
                title: 'New Chat',
                messages: []
            };
            setSessions([newSession]);
            setCurrentSessionId(newSession.id);
        }
    }, []);

    // Get current session
    const currentSession = sessions.find(s => s.id === currentSessionId);

    const createNewChat = () => {
        const newSession = {
            id: Date.now(),
            title: 'New Chat',
            messages: []
        };
        setSessions(prev => [newSession, ...prev]);
        setCurrentSessionId(newSession.id);
        setInput("");
        setShowResult(false);
    };

    const selectSession = (sessionId) => {
        setCurrentSessionId(sessionId);
    };

    const onSent = async (prompt) => {
        if (!currentSessionId) return;

        setLoading(true);

        try {
            const response = await runChat(input);

            // Clean response
            let cleanedResponse = response;
            if (cleanedResponse) {
                cleanedResponse = cleanedResponse.replace(/<environment_details>[\s\S]*?<\/environment_details>/g, '');
                cleanedResponse = cleanedResponse.replace(/<environment_details>[\s\S]*/g, '');
                cleanedResponse = cleanedResponse.trim();
            }

            // Clean input too
            let cleanedInput = input;
            if (cleanedInput) {
                cleanedInput = cleanedInput.replace(/<environment_details>[\s\S]*?<\/environment_details>/g, '');
                cleanedInput = cleanedInput.replace(/<environment_details>[\s\S]*/g, '');
                cleanedInput = cleanedInput.trim();
            }

            setSessions(prev => prev.map(session => {
                if (session.id === currentSessionId) {
                    const isFirstMessage = session.messages.length === 0;
                    return {
                        ...session,
                        title: isFirstMessage ? cleanedInput.slice(0, 30) + (cleanedInput.length > 30 ? '...' : '') : session.title,
                        messages: [...session.messages, { prompt: cleanedInput, response: cleanedResponse }]
                    };
                }
                return session;
            }));

            setShowResult(true);
        } catch (error) {
            console.error('Chat error:', error);
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const contextValue = {
        sessions,
        currentSessionId,
        createNewChat,
        selectSession,
        onSent,
        loading,
        input,
        setInput,
        showResult,
        setShowResult,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider