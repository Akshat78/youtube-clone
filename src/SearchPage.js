import React from 'react'
import"./SearchPage.css"; 
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
function SearchPage() {
  return (
    <div className='searchPage'>
    <div className='searchPage__filter'>
        <TuneOutlinedIcon/>
        <h2>FILTER</h2>
        </div>
        <hr/>

        <ChannelRow
        image="https://i.redd.it/72pt41kdyzg31.jpg"
        channel="Mumbaiker Nikhil"
        verified
        subs="4.4M"
        noOfVideos={999}
        description="I LOVE TO VLOG MY LIFE"
        />
    </div>
  )
}

export default SearchPage