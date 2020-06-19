import React from 'react';
import { DataContext } from './Context'
import Message from './Message'
import NewMessage from './NewMessage'

function MessagesPreview(props) {
    const context = React.useContext(DataContext);

    if (context.currentMsgId == -1) {
        return <div>No Message Selected</div> 
    }
    else if (context.currentMsgId == -2) {
        return <NewMessage />
    }
    else {
        return <Message />
    }
}

export default MessagesPreview