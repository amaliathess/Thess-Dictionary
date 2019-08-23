
import React,{Component} from 'react'; // import react library if you have an ext.js it asumes you want it from node_modules
import ReactDOM from 'react-dom'; // is to render something on the root
import JSON from './db.json'
//COMPONENTS
import Header from './components/header.js'
import Playground from './components/playground.js'
import NewsList from './components/list.js'

// this is a component the main component
class App extends Component {
  //return React.createElement('h1', {className:'title'}, React.createElement('div',{className:'www'}, 'lkjlk'))
  state = {
  	news:JSON
  }
render(){
	console.log(this.state.news);
  return (
  	<div>
  		<Header/>
  		<NewsList news={this.state.news} amy='me'/>
  	</div>

  	)
  }
}
ReactDOM.render(<App/>,document.querySelector('#root'));


  // render method takes 1 arg what to render 2 arg where
