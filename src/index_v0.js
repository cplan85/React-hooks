import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {FaStar} from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({selected = false, onSelect}) {
  return <FaStar color={selected? "red" : "gray"} onClick={onSelect}/>;
}

function StarRating({totalStars = 5}) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
    {createArray(totalStars).map((n,i) => (
  <Star 
    key={i} 
    selected={selectedStars > i} 
    onSelect={() => setSelectedStars(i +1)}/>
    
    ))}
    <p>{selectedStars} of {totalStars}</p>
    </>)
}


function App() {
  const [name, setName] = useState("Jan");
  const [status, setStatus] = useState("Not Delivered");

  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h1>The package is: {status}.</h1>
      <button onClick={()=> setStatus("Delivered")}>Deliver</button>
      <div>
        <input type="checkbox" value={checked} onChange={()=> setChecked((checked) => !checked)}/>
        <p>{checked ? "checked" : "not checked"}</p>
      </div>
      <StarRating totalStars={4}/>
    </div>
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
