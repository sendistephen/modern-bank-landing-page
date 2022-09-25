import React from "react";
import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
	<div
		className={`flex flex-row p-6 rounded-[20px] ${
			index !== features.length - 1 ? "mb-6" : "mb-0"
		} feature-card`}>
		<div
			className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
			<img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
		</div>
		<div className="flex-1 flex flex-col ml-3">
			<h4 className="font-poppins font-semibold text-white leading-[23px] text-[18px]">
				{title}
			</h4>
			<p className="font-poppins font-normal text-dimWhite leading-[24 px] text-[16px]">
				{content}
			</p>
		</div>
	</div>
);

const Business = () => {
	return (
		<section id="features" className={layout.section}>
			<div className={layout.sectionInfo}>
				<h1 className={`${styles.heading2}`}>
					You do the business,
					<br className="sm:block hidden" /> we’ll handle the money.
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<Button styles="mt-10" />
			</div>
			<div className={`${layout.sectionImg} flex-col`}>
				{features.map((feat, index) => (
					<FeatureCard key={feat.id} {...feat} index={index} />
				))}
			</div>
		</section>
	);
};

export default Business;
