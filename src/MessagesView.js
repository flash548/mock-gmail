import React from 'react';
import Snippet from './Snippet'
import { DataContext } from './Context'

function MessagesView(props) {
    const context = React.useContext(DataContext);


    // I filter my own messages here since I downloaded and cached ALL of them on the App didMount()
    //  looking back I could have used the API search/query feature here!  hindsight 20/10!
    return (
            <div>
                <div class={'sender-header'}>Sender</div><div class={'subject-header'}>Subject</div>
                 { context.emails == null ? (<div class={'snippet'}>Loading....</div>) :  (
                     context.emails.filter((msg) => msg.subject.toUpperCase().indexOf(context.filter.toUpperCase()) != -1 ).map(msg => (<Snippet id={msg.id} sender={msg.sender} subject={msg.subject} />)) )
                    
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