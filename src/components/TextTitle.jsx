// On a destructurer les props
function TextTitle({ text1 }) {
	return <h1>{text1}</h1>;
}

// props === { text: "My React App" }
// { text } === text

// function TextTitle(props) {
// 	// par défaut, props est un objet
// 	console.log(props);
// 	return <h1>{props.text1}</h1>;
// }

export default TextTitle;
