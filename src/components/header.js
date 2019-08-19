import React,{Component} from 'react'; // the component makes a var with React.Component
import '../css/style.css';
//functional or class based component

//function
const getYear =()=>{
	const newDate = new Date();
	return newDate.getFullYear();
}
// obj
const user ={
	name:'Amy',
	lastname:'Mylastnema',
	age:35
}


//functional class
class Header extends Component {
	state ={ // when you user state and you change the value react rerenders the function not the holl page just the function
		title:'The eywords are:',
		keywords:''
	}
	inputChangeHandler = (event) =>{
		//console.log(event.target.value);
		this.setState({

			keywords: event.target.value
		})
	
	}
	render(){
		console.log(this.state.keywords);
	  return (
	  	<header >
	  		<div 
	  		className= "logo"
	  		onClick={()=>console.log('I was clicked')}
	  		>Logo</div>
	  		<input 
			onChange={(e) => this.inputChangeHandler(e)}
	  		type="text"/>
	  		<div>{this.state.title}</div>
	  		<div>{this.state.keywords}</div>
	  	</header>
	  // <div>{user.name}</div>
	  // this is the {getYear()}
	  //or {(new Date().getFullYear())}

		)
	}
}

export default Header;