import React, { useState, useContext } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import FeedbackContext from "../context/FeedbackContext";

function TaskItem({ item }) {
	const [check, setCheck] = useState(false);
	const { deleteTask } = useContext(FeedbackContext);

	return (
		<>
			<div className={`task ${check && 'checked'}`} checked={check}> 
				<div className="num">{item.priority}</div>
				<button onClick={() => deleteTask(item)} className="close-button">
					{/* <FaTimes color="purple" /> */}
					<AiFillCloseCircle color="black" size={20} />
				</button>
				<button onClick={() => setCheck(!check)} className="check-button">
					<AiFillCheckCircle color="black" size={20} />
				</button>

				<div className="text-display">{item.text}</div>
			</div>
		</>
	);
}

export default TaskItem;
