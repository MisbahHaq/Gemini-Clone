import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, showResult, loading, setInput, input, sessions, currentSessionId } = useContext(Context)

    const currentSession = sessions.find(s => s.id === currentSessionId);
    const conversation = currentSession?.messages || [];

    return (
        <div className="main">
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className='main-container'>

                {!showResult || conversation.length === 0 ? (
                    <>
                        <div className='greet'>
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card' onClick={() => setInput("Suggest beautiful places to see on an upcoming road trip")}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className='card' onClick={() => setInput("Brainstorm team bonding activities for our work retreat")}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className='card' onClick={() => setInput("Briefly summarize this concept: urban planning")}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className='card' onClick={() => setInput("Improve the readability of the following")}>
                                <p>Improve the readability of the following</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        {conversation.map((entry, idx) => (
                            <div key={idx} className='conversation-entry'>
                                <div className="result-title">
                                    <img src={assets.user_icon} alt="" />
                                    <p>{entry.prompt}</p>
                                </div>
                                <div className="result-data">
                                    <img src={assets.gemini_icon} alt="" />
                                    <p dangerouslySetInnerHTML={{ __html: entry.response }}></p>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className='conversation-entry'>
                                <div className='result-data'>
                                    <img src={assets.gemini_icon} alt="" />
                                    <div className='loading-indicator'>
                                        <div className='loading-dots'>
                                            <span></span><span></span><span></span>
                                        </div>
                                        <span>Thinking...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type='text'
                            placeholder='Enter a prompt here'
                            onKeyDown={(e) => e.key === "Enter" && !loading && onSent()}
                            disabled={loading}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input && !loading && (
                                <img 
                                    onClick={() => onSent()} 
                                    src={assets.send_icon} 
                                    alt="" 
                                    className='send-icon'
                                />
                            )}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main