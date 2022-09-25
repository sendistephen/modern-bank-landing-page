import React from "react";
import { Hero, Navbar } from "./components";
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
		</div>
	);
};

export default App;
