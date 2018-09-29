//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Awesome Game, Great Job!</h1>
		<h2>Click each image only once, score 12 points and a winner is you!</h2>
	</header>
);

export default Jumbotron;