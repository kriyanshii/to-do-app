import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useState, useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import PrioritySelect from "./shared/PrioritySelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
	// const [priority, setPriority] = useState(5);

	const { text, buttons, message, btnDisabled, handelSubmit,handleTextChange, handlePriority } = useContext(FeedbackContext)

	return (
		<Card>
			<form onSubmit={handelSubmit}>
				<h2>Add Task:</h2>
				{/* to do - rating select component*/}
				<PrioritySelect
					buttons={buttons}
					select={handlePriority}
				/>
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Write a review"
						value={text}></input>
					<Button
						type="submit"
						version="secondary"
						isDesabled={btnDisabled}
						className="btn">
						Send
					</Button>
					{message && <div className="message">{message}</div>}
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
