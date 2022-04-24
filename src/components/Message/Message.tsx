import React, { useState, useEffect } from 'react'
import './Message.scss'

import avatar from '../../assets/image/avatar.png'

import { IMessage } from '../../interfaces'
import { CSSTransition } from 'react-transition-group'
import MessageBtns from '../MessageBtns/MessageBtns'

const Message: React.FC<IMessage> = ({id, name, body, favorite}) => {
	const hour = new Date().getHours()
	const minute = new Date().getMinutes()
	const min = minute.toString().length === 1 ? `0${minute}` : minute

	const [isFullComment, setIsFullComment] = useState(body.length > 200 ? true : false)
	const [load, setLoad] = useState(false)

	useEffect(() => {
		if (name) {
			setLoad(true)
		}
	}, [])

	return (
		<CSSTransition classNames='message' in={load} timeout={300}>
		 <div className="message__wrap">
			<div className="message__content">
				<div className="message__avatar_group">
					<div className="iavatar_grou__img">
						<img src={avatar} alt="avatar" />
					</div>
					<div className="avatar_group_time">
						<span>{`${hour}:${min}`}</span>
					</div>
				</div>
				<div className="message__top">

					<div className="message__info">
						<div className='message__name_group'>
							<div className="name_group_name">
								<span>{name}</span>
							</div>
							<div className="name_group_descr">
								<span>Текст поста в соц. сетях если это комментарий</span>
							</div>
						</div>

					<MessageBtns id={id} favorite={favorite}/>

					</div>

					<div className="message__comment">
						<div>{isFullComment ? `${body.slice(0, 200)}...` : body}</div>
						{
							body.length > 200 && !isFullComment
							? (<button onClick={() => setIsFullComment(!isFullComment)}>Закрыть</button>)
							: body.length >= 200
							? (<button onClick={() => setIsFullComment(!isFullComment)}>Далее</button>)
							: ''
						}
					</div>

					<div className="message__img">
						<div className="image"></div>
					</div>

					<div className="message__hashtag">
						<div className="hashtag__item">
							<span>#Новое</span> <span>#Эксперт</span>
						</div>
					</div>
			</div>

			</div>
		</div> 
		</CSSTransition>
	)
}

export default Message