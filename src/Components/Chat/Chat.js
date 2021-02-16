import { Avatar, Button, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chat.css';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg/`}/>
                <div className="chat__header-info">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div> 
                    
                <div className="chat__header-right">
                    <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <IconButton>
                            <AttachFileIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />    
                    </IconButton>   
                </div>
            </div>

            <div className="chat__body">
                <p 
                className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Anton Buhai</span>
                    Hey guys
                    <span className="chat__timestamp">3:52pm</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
