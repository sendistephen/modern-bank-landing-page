import React from "react";
import { arrowUp } from "../assets";
import styles from "../styles";

function GetStarted() {
	return (
		<div
			className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer`}>
			<div
				className={`${styles.flexCenter} bg-primary rounded-full w-full h-full flex-col`}>
				<div className={`${styles.flexStart} flex-row`}>
					<p className="font-poppins font-medium text-lg leading-[23px]">
						<span className="text-gradient">Get</span>
					</p>
					<img
						src={arrowUp}
						className="object-contain w-[23px] h-[23px]"
						alt="arrow"
					/>
				</div>
				<p className="font-poppins font-medium text-lg leading-[23px]">
					<span className="text-gradient">Started</span>
				</p>
			</div>
		</div>
	);
}

export default GetStarted;
