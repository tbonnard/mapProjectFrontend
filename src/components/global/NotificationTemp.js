
import React from 'react';
import { useSelector } from 'react-redux'

import '../../styles/notificationTemp.css'


const NotificationTemp = () => {

    const message = useSelector(state => state.notificationTemp)

    if (!message) {
        return null
    }
  return (
    <div className='notifGlobal' style={{backgroundColor: message.style}}>
        <p className={message.style}>
            {message.message}
        </p>
    </div>
  )
}

export default NotificationTemp
