import React from 'react';
import Toolbar from './Toolbar'
import SearchBar from './SearchBar'
import MessagesView from './MessagesView'
import MessagePreview from './MessagePreview'
import { DataContext } from './Context'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      emails: null, // will hold all emails array
      filter: '', // current filter that gets set by the search compo to filter viewable emails
      queryField: '',
      currentMsgId: -1, // holds the email id message being viewed}
      selectMsg: this.selectMessage,
      fieldChanged: this.fieldChanged,
      search: this.search,
      newMessage: this.newMessage,
      sendMessage: this.sendMessage
      }
    }

  fieldChanged = (event) => {
    this.setState({queryField: event.target.value})
  }

  sendMessage = (event) => {
    this.setState({currentMsgId: -1})
    event.preventDefault()
  }

  selectMessage = (id) => {
    this.setState({currentMsgId: id})
  }

  newMessage = (event) => {
    this.setState({currentMsgId: -2}) // msg id of -2 means new message
    event.preventDefault()
  }

  search = (event) => {
    this.setState({filter: this.state.queryField})
    event.preventDefault()
  }

  async componentDidMount() {
        const response = await fetch('http://localhost:3001/emails');
        const json = await response.json()   
        let emails = []
        json.forEach((msg) => {
            emails.push(msg);
        })
        console.log(emails)
        // store all emails
        this.setState({'emails': emails})

  }

  render() {

    return (
        <div className="App">
        <DataContext.Provider value={this.state}>
          <div>
            <header className="App-header">
              <h1>WELCOME TO MOCK GMAIL</h1>
            </header>
            <Toolbar/ >
          </div>          
            {/* Start main content below */}
            <div id={"Main"}>
              <div id={"LeftPane"}>
                <div id={"Search"}>
                  <SearchBar />
                </div><br/>
                <div id={"Messages"}>
                  <MessagesView />
                </div>
              </div>
              <div id={"RightPane"}>
                <MessagePreview />
              </div>
            </div>
          </DataContext.Provider>
        </div>
    );
  }
}

export default App;
