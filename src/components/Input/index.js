import {useRef} from 'react';

const Input = () => {
	const inputRef = useRef(null)

	// const handleFocus = () => {
	// 	inputRef.current.focus()
	// }

    const handleFocus = () => {
		document.getElementById("myTxt").focus()
	}

	return (
		<div>
			<input id="myTxt" ref={inputRef} type="text" />
			<button onClick={handleFocus}>Focus</button>
		</div>
	)
}

export default Input;