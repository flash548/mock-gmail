import React from 'react';
import { DataContext } from './Context'

function NewMessage(props) {
    const context = React.useContext(DataContext);
    return (

        <div>
            <table width={'100%'}>
                <tr><td width={'50%'} align={'left'}>To:</td><td align={'left'}> <input type={'email'} name={'to'}/> </td></tr>
                <tr><td width={'50%'} align={'left'}>Subject:</td><td align={'left'}> <input type={'textbox'} name={'subject'} /></td></tr>
                <tr><td colspan={'2'} align={'left'}> <textarea cols={'40'} rows={'20'} name={'body'}/></td></tr>
                <tr><td  align={'left'}><form><input type='button' onClick={context.sendMessage} value={'Send'}/></form></td><td></td></tr>
            </table>

        </div>

    )

}

export default NewMessage