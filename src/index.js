
import React from 'react'; // import react library if you have an ext.js it asumes you want it from node_modules
import ReactDOM from 'react-dom'; // is to render something on the root

//COMPONENTS
import Header from './components/header.js'
import Playground from './components/playground.js'

// this is a component the main component
const App =()=>{
  //return React.createElement('h1', {className:'title'}, React.createElement('div',{className:'www'}, 'lkjlk'))

  return (
  	<div>
  		<Header/>
  	</div>

  	)
}
ReactDOM.render(<App/>,document.querySelector('#root'));


  // render method takes 1 arg what to render 2 arg where
