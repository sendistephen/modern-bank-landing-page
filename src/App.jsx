import React from "react";
import {
	Billing,
	Business,
	CardDeal,
	Clients,
	CTA,
	Footer,
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
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
