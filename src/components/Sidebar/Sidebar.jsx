import './Sidebar.css'
import { assets } from '../../assets/assets'
import React, { useContext } from 'react'
import { Context } from '../../context/Context'

const Sidebar = () => {

    const { sessions, currentSessionId, createNewChat, selectSession } = useContext(Context)

    return (
        <div className='sidebar'>
            <div className="top">
                <div className="new-chat" onClick={createNewChat}>
                    <img src={assets.plus_icon} alt="" />
                    <p>New Chat</p>
                </div>

                {sessions.length > 0 && (
                    <div className='recent'>
                        <p className='recent-title'>
                            Recent
                        </p>
                        {sessions.map(session => (
                            <div 
                                key={session.id}
                                className={`recent-entry ${session.id === currentSessionId ? 'active' : ''}`}
                                onClick={() => selectSession(session.id)}
                            >
                                <img src={assets.message_icon} alt='' />
                                <p>{session.title}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="bottom">
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} />
                    <p>Help</p>
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} />
                    <p>Activity</p>
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar