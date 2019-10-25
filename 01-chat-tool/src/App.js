import React from 'react';
import './App.css';
import fire from './fire';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', messages: [] };
  }
  componentWillMount() {
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e) {
    e.preventDefault();
    fire.database().ref('messages').push(this.inputEl.value);
    this.inputEl.value = '';
  }
  render() {
    return <div className="App">
      <div className="branch-logo">
        <a href="http://htactive.com" target="_blank" rel="noopener noreferrer">ht coding challenge</a>
      </div>
      <header className="App-header">
        <form onSubmit={this.addMessage.bind(this)}>
          <input className="chat-input" placeholder="type and press enter to chat" type="text" ref={el => this.inputEl = el} />
        </form>
        <div className="chat-container">
          {this.state.messages.map(r => (
            <p className="message-box" key={r.id} dangerouslySetInnerHTML={{ __html: r.text }}></p>
          ))}
        </div>
      </header>
    </div >;
  }
}

export default App;
