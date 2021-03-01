import React, {useEffect, useState} from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from '../SidebarChat/SidebarChat';
import db from '../../firebase';
import {useStateValue} from '../../StateProvider';


function Sidebar() {

    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();
        
    useEffect(() => {
        const unsubscribe =  db.collection('Rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            }));
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user.photoURL}/>
                <div className="sidebar__header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/> 
                    </IconButton>         
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__search-container">
                    <SearchIcon/>
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => {
                    return <SidebarChat 
                        key={room.id} 
                        id={room.id} 
                        name={room.data.name}/>
                })}
            </div>

        </div>
    )
}

export default Sidebar
