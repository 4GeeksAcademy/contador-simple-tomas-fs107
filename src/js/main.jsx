import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.css'
import Home from './components/Home';
import SecondsCounter from "./components/SecondsCounter";

let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById('root'))

setInterval(() => {
    seconds ++;
    root.render(<SecondsCounter seconds = {seconds}/>)
}, 1000
);