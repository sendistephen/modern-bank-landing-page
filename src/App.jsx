import React from "react";
import { Business, Hero, Navbar, Stats } from "./components";
import styles from "./styles";

const App = () => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			{/*--- Navbar component ---*/}
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			{/*---- Hero component ---*/}
			<div className={`bg-primary ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
			{/*---- Stats component ---*/}
			<div className={`bg-primary ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
				</div>
			</div>
			{/*---- Business component ---*/}
			<div className={`bg-primary ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Business />
				</div>
			</div>
		</div>
	);
};

export default App;
