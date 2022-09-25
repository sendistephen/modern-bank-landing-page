import React from "react";
import {
	Billing,
	Business,
	CardDeal,
	Hero,
	Navbar,
	Stats,
	Testimonials,
} from "./components";
import styles from "./styles";

const App = () => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			{/*--- Navbar section ---*/}
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			{/*---- Hero section ---*/}
			<div className={`bg-primary ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
			{/*---- Stats section ---*/}
			<div className={`bg-primary ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
				</div>
			</div>
			{/*---- Business section ---*/}
			<div className={`bg-primary ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Business />
				</div>
			</div>
			{/*---- Billing section ---*/}
			<div className={`bg-primary ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Billing />
				</div>
			</div>
			{/*---- Card section ---*/}
			<div className={`bg-primary ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<CardDeal />
				</div>
			</div>
			{/*---- Testimonial section ---*/}
			<div className={`bg-primary ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Testimonials />
				</div>
			</div>
		</div>
	);
};

export default App;
