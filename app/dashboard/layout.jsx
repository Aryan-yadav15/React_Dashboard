import React from 'react'
import Sidebar from '../ui/dahboard/sidebar/page'
import Navbar from '../ui/dahboard/navbar/page'

const layout = ({children}) => {
  return (
    <div>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default layout