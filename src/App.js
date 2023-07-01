import React, { useState, useContext } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "/components/TaskForm";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
	// var timer = require('react-live-timer')
	return (
		<FeedbackProvider>
			<Header />
			<div class="lines"></div>
			<div className="container">
				<TaskForm />
				<TaskList />
			</div>
		</FeedbackProvider>
	);
};

export default App;
