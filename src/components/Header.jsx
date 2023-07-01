import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};

	let newDate = new Date();
	let date = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();
	return (
		<header className="header" style={headerStyles}>
			<div>
				<h1>{text}</h1>
			</div>
			<div className="date">
				<div className="date-component">
					<div className="date-icon">{date} </div>
					<div className="date-text">/ {month} </div>
					<div className="date-text">/ {year}</div>
				</div>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: "To Do",
};

Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};

export default Header;
