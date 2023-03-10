import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';



function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#00000")


const submit =(e) => {
  e.preventDefault();
  alert(`${sound} sounds likes ${color}`);
  setSound("");
  setColor("#000000")
}
return (
 <form onSubmit={submit}>
  <input 
  value={sound} 
  type="text"
  onChange={(e) => setSound(e.target.value)}
  placeholder="Sound..." />
  <input 
  value={color}
  onChange={(e) => setColor(e.target.value)} 
  type="color"/>
  <button>ADD</button>
 </form>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
