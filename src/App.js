import { ChatEngine } from "react-chat-engine";

import LoginForm from './components/LoginForm';

import './App.css';
import ChatFeed from "./components/ChatFeed";

const App=()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(
        <ChatEngine
        height="100vh"
        projectID="8374160f-f933-4037-9483-404331eb2ab5"
        userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/> }
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App;