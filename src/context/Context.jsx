import { createContext, useEffect } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    useEffect(() => {
        const initialize = async () => {
            try {
                await onSent("what is react js")
            } catch (error) {
                console.error('Initial chat error:', error);
            }
        }
        initialize()
    }, [])

    const onSent = async (prompt) => {
        await runChat(prompt)
    }

    const contextValue = {
        onSent
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider