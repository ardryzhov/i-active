import React, { useEffect } from 'react'
import './App.css'

import Header from './components/Header/Header';
import { getMessageFetch } from './redux/messageSlice'
import Messages from './components/Messages/Messages'
import { IState } from './interfaces';
import { updateMessages } from './redux/messageSlice';

import { useSelector, useDispatch } from 'react-redux'

function App() {
	const state: any = useSelector<IState>(state => state.message)
	const dispatch = useDispatch()
	
	useEffect(() => {
		if (!state.message.length) {
			dispatch(getMessageFetch())
		}
	}, [])

	useEffect(() => {
		const timerId = setTimeout(() => {
			dispatch(updateMessages())
		}, 5000)
		if (state.message.length > 65) {
			clearTimeout(timerId)
		}
		return () => clearTimeout(timerId)
	}, [state])

	return (
		<div className='app-wrap'>
			<Header />
			<Messages />
		</div>
	)
}

export default App;
