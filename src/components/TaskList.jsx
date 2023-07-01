import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import FeedbackContext from "../context/FeedbackContext";

function TaskList() {
	const { task } = useContext(FeedbackContext);

	if (!task || task.length === 0) {
		return <p>No Tasks Yet!</p>;
	}

	return (
		<div className="task-list">
			{task
				.sort((a, b) => a.priority - b.priority)
				.map((item) => (
					<TaskItem key={item.priority} item={item} />
				))}
		</div>
	);
}

export default TaskList;
