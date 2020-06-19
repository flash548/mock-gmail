import React from 'react';
import Snippet from './Snippet'
import { DataContext } from './Context'

function MessagesView(props) {
    const context = React.useContext(DataContext);
    console.log(context.emails)
    var re = new RegExp(/.*/);
    console.log(context.filter)
    return (
            <div>
                <div class={'sender-header'}>Sender</div><div class={'subject-header'}>Subject</div>
                 { context.emails == null ? (<div class={'snippet'}>Loading....</div>) :  (
                     context.emails.filter((msg) => msg.subject.indexOf(context.filter) != -1 ).map(msg => (<Snippet id={msg.id} sender={msg.sender} subject={msg.subject} />)) )
                    
                 }
            </div>
    );

}

export default MessagesView

// { context.emails == null ? (<div class={'snippet'}>Loading....</div>) :  (
//     (context.filter !== '') ? (context.emails.filter((msg) => re.exec(msg.subject)).map(msg => (<Snippet id={msg.id} sender={msg.sender} subject={msg.subject} />)) )
//     : (<Snippet id={props.id} sender={props.sender} subject={props.subject} />))
// }

// { context.emails == null ? (<div class={'snippet'}>Loading....</div>) :  (
//     context.emails.map(msg => (<Snippet id={msg.id} sender={msg.sender} subject={msg.subject} />)))
//   }