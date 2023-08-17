import React from 'react';

 const Chat = () => {

  return (
    <div>
    <div className="container-fluid">        
       <h1>Chat</h1>
        <p>
          We all need someone to talk to sometimes. Chat anonymously with a peer to work through your problems and get some things off your chest.
        </p>
    </div>
    <p className="texting">
      <strong>YOU:</strong> hello
      <br/>
      <br/>
      <strong>user123:</strong>  how's your day going?
      <br/>
      <br/>
      <strong>YOU:</strong> not so good i'm failing school.
      <br/>
      <br/>
      <strong>user123:</strong> oh sorry wanna talk about it?
      <br/>
      <br/>
      <strong>YOU:</strong> at school I just can't focus and keep failling my exams.
      <br/>
      <br/>
      <strong>user123:</strong> i can relate. have you tried talking to a school counsellor?
      <br/>
      <br/>
      <strong>YOU:</strong> no, i haven't. how did you cope with your problems at school?
      <br/>
      <br/>
      <strong>user123:</strong> i talked to my school counsellor and she helped me talk with my teachers who helped me and i managed to not fail my classes.
      <br/>
      <br/>
      <strong>YOU:</strong> okay thanks for the help, i'll try what you did.
    </p>
    <form action="/url" method="GET">
          <div className="text-box"><input type="text"></input></div>
        </form>
    </div>
  
  )

}
 
export default Chat