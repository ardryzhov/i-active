import React, { useState, useEffect } from 'react'
import './MessageBtns.scss'

import left from '../../assets/image/left-btn.png'
import center from '../../assets/image/center-btn.png'
import right from '../../assets/image/right-btn.png'
import hide from '../../assets/image/hide.png'
import option from '../../assets/image/option.png'
import send from '../../assets/image/send.png'
import { addMessageToFavorite, deleteMessageInFavorite } from '../../redux/messageSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as activeStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as inactiveStar } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'

interface IBtnsProps {
	id: string,
	favorite: boolean
}

const MessageBtns: React.FC<IBtnsProps> = ({id, favorite}) => {
	const [isFavorite, setFavorite] = useState(favorite)
	const dispatch = useDispatch()

	useEffect(() => {
		setFavorite(favorite)
	}, [favorite])

	const favoriteHandler = () => {
		if (isFavorite) {
			dispatch(deleteMessageInFavorite({id}))
		} else {
			dispatch(addMessageToFavorite({id}))
		}
	}

	return (
		<div className="message__btns_group">
			<div className="btns__group_smth">
				<img src={left} alt="left" />
				<img src={center} alt="center" />
				<img src={right} alt="right" />
			</div>

			<div className="btns__group_options">
				<div className="group__options">
					<img src={send} alt="send message" />
				</div>
				<div className="group__options">
				<img src={hide} alt="send message" />
					</div>
				<div className="group__options">
					<img src={option} alt="params message" />
				</div>
					<div className="group__options" onClick={favoriteHandler}>
					<FontAwesomeIcon className={isFavorite ? 'favorite_icon active__favorite' : 'favorite_icon inactive__favorite'} icon={isFavorite ? activeStar : inactiveStar} />
					</div> 
				</div>
			</div>
	)
}

export default MessageBtns