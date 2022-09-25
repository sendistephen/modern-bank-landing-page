import React from "react";
import style, { layout } from "../styles";
import Button from "./Button";

const Business = () => {
	return (
		<section id="features" className={layout.section}>
			<div className={layout.sectionInfo}>
				<h1 className={`${style.heading2}`}>
					You do the business,
					<br className="sm:block hidden" /> we’ll handle the money.
				</h1>
				<p className={`${style.paragraph} max-w-[470px] mt-5`}>
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<Button styles="mt-10" />
			</div>
		</section>
	);
};

export default Business;
