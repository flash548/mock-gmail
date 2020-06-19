import React from 'react';
import { DataContext } from './Context'

function Message(props) {
    const context = React.useContext(DataContext);

    var myMsg = {}
    context.emails.forEach((msg) => {
        if (msg.id === context.currentMsgId) {
            myMsg = msg;
            return;
        }

    })
    return (

        <div>
            <table width={'100%'} border={'1'}>
                <tr><td width={'50%'} align={'left'}>From:</td><td align={'left'}>{myMsg.sender}</td></tr>
                <tr><td width={'50%'} align={'left'}>To:</td><td align={'left'}>{myMsg.recipient}</td></tr>
                <tr><td width={'50%'} align={'left'}>Date:</td><td align={'left'}>{myMsg.date}</td></tr>
                <tr><td width={'50%'} align={'left'}>Subject:</td><td align={'left'}>{myMsg.subject}</td></tr>
                <tr><td colspan={'2'} align={'left'}><center>{myMsg.message}</center></td></tr>
            </table>

        </div>

    )



}

export default Message