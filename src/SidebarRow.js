import React from 'react'
import './sidebarRow.css';



function SidebarRow({selected,Icons, title}) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
    <Icons className='sidebarRow__icons'/>
    <h1 className='sidebarRow__title'>{title}</h1>
    </div>
    )
}

export default SidebarRow