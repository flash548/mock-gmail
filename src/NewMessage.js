import React from 'react';
import { DataContext } from './Context'

function NewMessage(props) {
    const context = React.useContext(DataContext);
    return (

        <div>
            <form>
            <table width={'100%'}>
                <thead></thead>
                <tr><td align={'left'}>To:</td><td align={'left'}> <input type={'email'} onChange={context.updateRecipient} name={'to'}/> </td></tr>
                <tr><td align={'left'}>Subject:</td><td align={'left'}> <input type={'textbox'} onChange={context.updateSubject} name={'subject'} /></td></tr>
                <tr><td colspan={'2'} align={'left'}> <textarea cols={'40'} rows={'20'} name={'body'} onChange={context.updateBody}/></td></tr>
                <tr><td  align={'left'}><form><input type='button' onClick={context.sendMessage} value={'Send'}/></form></td><td></td></tr>
            </table>
            </form>

        </div>

    )

}

export default NewMessage