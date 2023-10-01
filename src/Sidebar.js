import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';





function Sidebar() {
  return (
    <div className='sidebar'>

   <SidebarRow selected Icons={HomeOutlinedIcon} title='Home'/>
   <SidebarRow Icons={WhatshotOutlinedIcon}  title='Trending'/>
   <SidebarRow Icons={SubscriptionsIcon} title='Subscriptions'/>
   <hr/>
   <SidebarRow Icons={VideoLibraryIcon}  title='Library'/>
   <SidebarRow Icons={HistoryOutlinedIcon}  title='History'/>
   <SidebarRow Icons={OndemandVideoOutlinedIcon}  title='Your videos'/>
   <SidebarRow Icons={WatchLaterIcon}  title='Watch later'/>
   <SidebarRow Icons={ThumbUpOutlinedIcon}  title='Liked videos'/>
   <SidebarRow Icons={ExpandMoreOutlinedIcon}  title='Show more'/>
   <hr/>
   



    </div>
  )
}

export default Sidebar