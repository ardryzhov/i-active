import React, { useState, useEffect } from 'react'
import './Messages.scss'

import Message from '../Message/Message'
import { IMessage, IState } from '../../interfaces'
import { pushMessage, unshiftMessage } from '../../redux/messageSlice'

import { useSelector, useDispatch } from 'react-redux'

const Messages: React.FC = () => {
	const dispatch = useDispatch()
	const state: any = useSelector<IState>(state => state.message)
	const [isLoading] = useState<boolean>(state.loading);
	const [activeBtn, setActiveBtn] = useState(state.newMessagePosition)

	useEffect(() => {
		setActiveBtn(state.newMessagePosition)
	}, [state])

	return (
		<div className="messages__wrap">
			<div className="messages__content">
				<div className="sort__btn">
					<span>Показывать новые сообщения:</span>
					<br />
					<div className="sort__btns">
						<button className={activeBtn === 'bottom' ? 'btn-active' : 'btn'} onClick={() => dispatch(pushMessage())}>С низу</button>
						<button className={activeBtn === 'top' ? 'btn-active' : 'btn'} onClick={() => dispatch(unshiftMessage())}>Сверху</button>
					</div>
				</div>

				{!isLoading 
				? (state.message.map((v: IMessage) => <Message key={v.id} {...v} />))
				: (<h1>Loading</h1>)}

			</div>
		</div>
	)
}

export default Messages