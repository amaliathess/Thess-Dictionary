
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
  	news:JSON,
  	filtered:[]
  }
  getKeyword =(event)=>{
  	//console.log(event.target.value);
  	let keyword = event.target.value;
  	let filtered = this.state.news.filter((item)=>{

  		return item.thess.indexOf(keyword) > -1
  	})
console.log(filtered)
this.setState({
	filtered
})
  }
render(){
	let newFiltered =this.state.filtered;
	let newsAll = this.state.news;
  return (
  	<div>
  		<Header keywords={this.getKeyword}/>
  		<NewsList news={newFiltered.length === 0 ? newsAll: newFiltered} amy='me'>
  			 hello there {/* this is send with props in the component */}
  		</NewsList>
  	</div>

  	)
  }
}
ReactDOM.render(<App/>,document.querySelector('#root'));


  // render method takes 1 arg what to render 2 arg where
