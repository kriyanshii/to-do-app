import React from "react";
import { useState } from "react";

function PrioritySelect({ buttons, select }) {
	const [selected, setSelected] = useState();

	const handleChange = (e) => {
		e.preventDefault()
		setSelected(+e.currentTarget.value);
		select(+e.currentTarget.value);
	};

	return (
		<ul className="priority">
			{buttons.map((index) => (
				<li key={index}>
					{index}
					<input
						type="radio"
						id={`num${index}`}
						name={`num${index}`}
						value={index}
						onChange={handleChange}
						checked={selected === index}></input>
					<label htmlFor={`num${index}`}>{index}</label>
				</li>
			))}
		</ul>
	);
}

export default PrioritySelect;
