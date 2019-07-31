import React from 'react';

const getYear =()=>{
	const newDate = new Date();
	return newDate.getFullYear();
}

const Header = () =>{
	  return <div>this is the {getYear()}</div>
	  //or {(new Date().getFullYear())}
}

export default Header;