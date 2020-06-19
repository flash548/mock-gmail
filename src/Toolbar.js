import React from 'react';
import { DataContext } from './Context'

function Toolbar(props) {
    const context = React.useContext(DataContext);
    return (

        <div class={'toolbar'}>
            <div><form><input type='button' onClick={context.newMessage} value={'New Message'}/></form></div>
        </div>

    )

}

export default Toolbar