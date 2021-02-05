import React from "react";
import logo from "./Logo.png";
import Common from './Common';

const About = () => {
	return (

		<>
		<Common 
		name='Learn'
		nameS = 'About us' 
		imgsrc = {logo} 
		visit = "/contact"
		btname = 'contact us'
		context = 'Elixir is the first-ever Health and fitness Society of a college in India! The Elixir is an initiative started by students who care not only about their health but of those around them as well. Health is something that often gets neglected in our competitive student life. Through Elixir we wish to promote the wellbeing of both, the physical and mental aspects of health and build an energetic, productive lifestyle.' 
		/>
	</>
	);
};

export default About;