import React, { useEffect, useMemo, useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ onFilter }) => {
	const [selected, setSelected] = useState(-1);
	const options = useMemo(() => {
		return ["Completed", "Delivered", "Prepared"];
	}, []);

	useEffect(() => {
		if (selected !== -1) {
			onFilter(options[selected]);
		}
	}, [options, selected, onFilter]);

	return (
		<div className="Dropdown">
			<div className="Dropdown__input">
				<svg
					className="Dropdown__icon"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
					/>
				</svg>
				{selected >= 0 ? options[selected] : "Filter"}
			</div>
			<div className="Dropdown__input-container">
				{options.map((option, index) => (
					<div
						key={index}
						onClick={() => {
							setSelected(index);
						}}
					>
						{option}
					</div>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
