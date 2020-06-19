import React from 'react';
import { DataContext } from './Context'

function Snippet(props) {
    const context = React.useContext(DataContext);

    function signalSelectMsg() {
        context.selectMsg(props.id);
    }

    return (
            <div class='snippet' onClick={signalSelectMsg} id={'test'}>
                <div class='detail-sender'>{props.sender}</div>
                <div class='detail-subject'>{props.subject}</div>
            </div>
    );

}

export default Snippet