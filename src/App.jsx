/**
 * Fonction fléchée


 const App = () => {
 	return (
 		<div>
 			<h1>My React App</h1>
 		</div>
 	);
 };
 */

import Title from "./components/Title";
function App() {
	/**
	 * Un fragment permet de faire un rendu sans élément parent
	 * <> -> </> ou <React.Fragment> -> </React.Fragment>
	 */
	return (
		<>
			<Title />
			<Title />
			<Title />
			<Title />
		</>
	);
}

export default App;
