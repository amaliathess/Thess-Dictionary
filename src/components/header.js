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

const randline = ()=> { 

const gethim = ["Κλαίν μάιν", "έλα ρε καρτάση", "αφού σε λέω", "ντεμεκ", "ναι ρε κασέρια τα λέμε όλα τι θες ?"];
	return gethim[Math.floor(Math.random() * gethim.length)]; }
console.log(randline);


//functional class
class Header extends Component {
	state ={ // when you user state and you change the value react rerenders the function not the holl page just the function
		title:'The eywords are:',
		active:false,
		keywords:'',
		theclass:'active'
	}
	inputChangeHandler = (event) =>{
		//console.log(event.target.value);
		const value = event.target.value === '' ? false : true;
		const theclass = event.target.value === '' ? event.target.class = 'non-active' : event.target.class = 'active';
		this.setState({
			active:value,
			keywords: event.target.value,
			theclass: theclass
		})
	
	}
	render(){
		//console.log(this.props.keywords);
		// const style ={
		// 	background:'red'
		// }
		// console.log(this.state.keywords);
		// if (this.state.keywords != ''){
		// 	style.background = 'blue'
		// }else{
		// 	style.background = 'red'

		// }
		
	  return (
	  	<header style = {{background:`${this.state.active ?'red':'blue'}`}} className = {this.state.theclass}>

	  		<div 
	  		className= "logo"
	  		onClick={()=>alert(randline())}
	  		>
	  		<small>Λεξικο για Αθηναίους</small>

	  			<h2>Τι ψάχνεις?</h2>

	  		</div>
	  		{/*onChange={(e) => this.inputChangeHandler(e)}*/}
	  		<input 
			
			onChange={this.props.keywords}
	  		type="text"/>
	  		
	  	</header>
	  // <div>{user.name}</div>
	  // this is the {getYear()}
	  //or {(new Date().getFullYear())}

		)
	}
}

export default Header;