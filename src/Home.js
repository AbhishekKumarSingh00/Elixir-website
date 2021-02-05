import React from "react";
import logo from "./Logo.png";
import Common from './Common';

const Home = () => {
	return (

		<>
		<Common 
		name = ""
		nameS = 'Elixir' 
		imgsrc = {logo} 
		visit = "/event"
		btname = 'Lets-go'
		context = 'The health and fitness society of DTU'
		/>
	</>
	);
};

export default Home;