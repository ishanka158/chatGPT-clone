import './App.css';
import {useState} from 'react'
import gptlog from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'
import { senMsgToOpenAI } from './Openai';



function App() {

  const [input,setinput] = useState('');
  const [messages,setMessages] = useState([
    {
    text:'hi kkk',
    isBot:true,
    }
]);

  const handleSend = async()=>{
    const res = await senMsgToOpenAI(input)
    setMessages([
      ...messages,
      {text:input,isBot:false},
      {text:res,isBot:true}
    
    
    ])
  }

  return (
    <div className="App">
      
      <div className='sidebar'>
        <div className='upperside'>
          <div className='uppersidetop'><img src={gptlog} alt='' className='logo'/><span className='brand'>ChatGPT</span></div>
          <button className='midbtn'><img src={addBtn} alt='' className='addBtn'/>New Chat</button>
          
          <div className='uppersidebottom'>
            <button className='query'><img src={msgIcon} alt=''/>What is Programing?</button>
            <button className='query'><img src={msgIcon} alt=''/>How to use an API?</button>

          </div>

        </div>
        <div className='lowerside'>
          <div className='listitem'> <img src={home} className='listitemimg'/>Home</div>
          <div className='listitem'> <img src={saved} className='listitemimg'/>Saved</div>
          <div className='listitem'> <img src={rocket} className='listitemimg'/>Upgrade to pro</div>

        </div>

      </div>

      <div className='main'>
        <div className='chats'>
          
          {messages.map((message,i)=>
             <div key={i} className={message.isBot? 'chat bot':'chat'}>
             <img className='iimage' src={message.isBot? gptImgLogo:userIcon}/> <p className='txt'> {message.text}</p>
           </div>
          )}
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a message' value={input} onChange={(e)=>{setinput(e.target.value)}}/><button className='send' onClick={handleSend}><img src={sendBtn} alt='send'/></button>
          </div>
          <p>Chat gpt my produce incorrect result. please considor that</p>
        </div>

      </div>
    </div>
  );
}

export default App;
