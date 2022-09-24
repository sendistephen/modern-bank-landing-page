import React from "react";
import { Navbar } from "./components";
import styles from "./styles";

const App = () => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			{/* Navbar component */}
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
		</div>
	);
};

export default App;
