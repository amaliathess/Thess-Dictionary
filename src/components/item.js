import React from 'react';
import { css } from 'glamor';
import classes from '../css/style.css'

const NewsItem =({item})=>{

	let news_item = css({
		padding:'20px',
		boxSizing: 'border-box',
		borderBottom: '1px solid grey',
		':hover':{
			color:'red'
		},
		'@media(max-width:800px)':{
			color:'blue'
		}

	})
	let item_grey = css({

		background:'lightgrey'
	})

	return(
				<div className={`${item_grey}`}{...news_item}>
					<h3>{item.thess}</h3>
					<div>{item.ath}</div>
				</div>
		)
}

export default NewsItem
