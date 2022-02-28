import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
function App() {
  const [mode,setmode]=useState('light')
  const togglemode = ()=>{
       if(mode === 'light'){
         setmode('dark')
         document.body.style.backgroundColor='#666699'
       }else{
         setmode('light')
         document.body.style.backgroundColor='white'
       }
  }
  return (
    <>
    <Router>
     <Navbar title="myapp" mode={mode} togglemode={togglemode}/>
     <div className="container my-3">
     <Switch>
          <Route exact path="/"><Textform heading = "Enter your Text Here" mode={mode}/></Route>
          <Route exact path="/about"><About/></Route>
     </Switch>
     </div>
     </Router>
   </>
  );
}

export default App;
