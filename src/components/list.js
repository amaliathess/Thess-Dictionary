import React from 'react';
import NewsItem from './item.js'
const NewsList = (props)=>{
	console.log(props)
	const items = props.news.map((item)=>{
		return(
			<NewsItem key={item.id} item={item}/> 
			)
	})
	return(
			<div>{items}</div>
		)
}

export default NewsList;