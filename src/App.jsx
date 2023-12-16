import React, { useState } from 'react'
import './App.css'
const App = (props) => {
	const [input, setInput] = useState({
		name: '',
		amount: ''
	})
	const [validate, setValidate] = useState({})
	const handleChange = (event) => {
		let data = event.target
		setInput((prevstate) => ({
			...prevstate,
			[data.name]: data.value
		}))
	}
	const handleFocus = (event) => {
		let data = event.target
		setValidate((prevstate) => ({
			...prevstate,
			[data.name]: ""
		}))

	}
	const handleBlur = (event) => {
		let data = event.target
		if(input[data.name].trim()==""){
			setValidate((prevstate) => ({
				...prevstate,
				[data.name]: `${data.name} is requried filed`
			}))
		}
	
	}
	const handleSubmit = () => {
		alert ("validation success")
	}
	return (
		<div className="App">
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<input
					placeholder="name"
					type="string"
					name="name"
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<p style={{ color: 'red' }}>{validate['name']}</p>
				<input
					placeholder="amount"
					type="number"
					name="amount"
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<p style={{ color: 'red' }}>{validate['amount']}</p>
				<button
					type="submit"
					style={{
						background:
							input.name == '' || input.amount == ''
								? 'red'
								: 'lightgreen',
						color: 'blue',
						cursor: 'pointer'
					}}
					onClick={handleSubmit}
					disabled={input.name == '' || input.amount == ''}
				>
					{' '}
					submit
				</button>
			</div>
		</div>
	)
}
export default App
