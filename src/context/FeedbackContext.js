import React, { createContext, useState } from "react";
import uuidv4 from "react-uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [task, setTask] = useState([
		{
			priority: 1,
			id: 1,
			text: "This is from context",
		},
	]);

	const [text, setText] = useState("");
	const [buttons, setButtons] = useState([1, 2, 3, 4, 5]);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");
	const [priority, setPriority] = useState(5);

	const deleteTask = (deleted) => {
		if (window.confirm("Are you sure?")) {
			buttons.push(deleted.priority);
			buttons.sort();
			setTask(task.filter((item) => item.id != deleted.id));
			// setButtons(updatedButtons);
		}
	};

	const addTask = (newTask) => {
		newTask.id = uuidv4();
		setTask([newTask, ...task]);
		// console.log(newTask);
	};

	const handleTextChange = (e) => {
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setMessage("Text must be at least 10 characters");
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				priority,
			};
			addTask(newFeedback);
			// console.log(newFeedback)
			setText("");
			const updatedButtons = buttons.filter((button) => button !== priority);
			setButtons(updatedButtons);
		}
	};

	const handlePriority = (e) => {
		setPriority(e);
	};

	return (
		<FeedbackContext.Provider
			value={{
				task,
				text,
				message,
				btnDisabled,
				buttons,
				deleteTask,
				addTask,
				handleTextChange,
				handelSubmit,
				handlePriority,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
