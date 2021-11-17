import React from 'react'
import './App.css';


function sum (a, b){
  return a + b
}

function meuNome (){
  return(
    <div>Allan Tavares
   <p>programador - React</p>
   <h1>Soma: {sum (10 ,20)}</h1>
  </div>
  )
}



function  meuCurriculo(){
  return(
    <div>
    <p>html</p>
    <p>css></p>
    <p>boodstrap</p>
    <p>git/github</p>
    <p>React</p>
    </div>
  )
  
}


function App() {
  return (
    <div className="App">
     { meuNome()}
     { meuCurriculo()}
     
    </div>
  );
}

export default App;
