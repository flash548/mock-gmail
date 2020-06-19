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
      sendMessage: this.sendMessage,

      // hacky, but gets data from a new message....
      updateRecipient: this.updateRecipient,
      updateSubject: this.updateSubject,
      updateBody: this.updateBody,
      newBody: '',
      newRecipient: '',
      newSubject: '', 
      sender: 'christopher.zell@gmail.com'
      }
    }

  updateRecipient = (event) => {
    this.setState({newRecipient: event.target.value})
    event.preventDefault()
  }

  updateSubject = (event) => {
    this.setState({newSubject: event.target.value})
    event.preventDefault()
  }

  updateBody = (event) => {
    this.setState({newBody: event.target.value})
    event.preventDefault()
  }

  fieldChanged = (event) => {    
    this.setState({queryField: event.target.value, filter: event.target.value})
  }

  sendMessage = async (event) => {
    var newMessage = {sender: this.state.sender, recipient: this.state.newRecipient, subject: this.state.newSubject, message: this.state.newBody}
    const response = await fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessage)
    });
    const json = await response.json()  
    alert('result: ' + json.status + '\nmessage: ' + json.message)
    this.loadMessages() // do another get
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

  handleLeftPaneClick = (event) =>{
    if (event.target.id === 'LeftPane') {
      // clear the message preview
      this.setState({currentMsgId: -1})
    }
  }
  
  loadMessages = async () => {
    const response = await fetch('http://localhost:3001/emails');
    const json = await response.json()   
    let emails = []
    json.forEach((msg) => {
        emails.push(msg);
    })
    // store all emails
    this.setState({'emails': emails, currentMsgId: -1})
  }

  async componentDidMount() {
    this.loadMessages()
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
              <div id={"LeftPane"} onClick={this.handleLeftPaneClick}>
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
