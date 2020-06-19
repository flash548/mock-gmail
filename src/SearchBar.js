import React from 'react';
import { DataContext } from './Context'


function SearchBar(props) {
    const context = React.useContext(DataContext);

    return (
        <div>
                <form onSubmit={context.search}>
                    <input type='search' placeholder={'subject contains'} onChange={context.fieldChanged} id={"searchbox"}/>
                    <input type='button' value='Search' onClick={context.search}/>
                    <br/>                
                </form>
        </div> 
    )

}

export default SearchBar