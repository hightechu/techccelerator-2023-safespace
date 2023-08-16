import React from 'react';

 const Chat = () => {

  return (
    <div className="container-fluid">        
       <h1>Chat</h1>
        <p>
          We all need someone to talk to sometimes. Chat anonymously with a peer to work through your problems and get some things off your chest.
        </p>

        <form action="/url" method="GET">
          <p>Please enter your message below:</p>
          <input type="text"></input>
        </form>
    </div>
  )

}
 
export default Chat
