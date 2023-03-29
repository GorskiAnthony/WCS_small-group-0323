import TextTitle from "./TextTitle";

function Title() {
	const myH1 = "My React App";
	return <TextTitle text={myH1} text1="merci Alexis" />;
}

/**
 * Décrivons ce code :
 * <TextTitle text={myH1} />
 *
 * <TextTitle /> est un composant React
 * text est une propriété (props)
 * {myH1} est une valeur
 */

export default Title;
