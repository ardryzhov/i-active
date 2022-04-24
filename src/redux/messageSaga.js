import { put, call, takeEvery, select } from 'redux-saga/effects'
import { getMessageFetchSuccess, getUpdateMessageSuccess } from './messageSlice'

const BASE_URL = 'https://jsonplaceholder.typicode.com/comments'

function* workGetMessageFetch() {
	const saga = yield call(() => fetch(`${BASE_URL}?_limit=10`))
	const jsonSaga = yield saga.json()
	const state = jsonSaga.map(v => {
		return {
			...v,
			favorite: false
		}
	})
	yield put(getMessageFetchSuccess(state))
}

function* workGetUpdateMessage() {
	const storeLength = yield select(state => state.message.message.length)
	const saga = yield call(() => fetch(`${BASE_URL}/${storeLength + 1}`))
	const jsonSaga = yield saga.json()
	yield jsonSaga.favorite = false
	yield put(getUpdateMessageSuccess(jsonSaga))
}

export default function* messageSaga() {
	yield takeEvery('messages/getMessageFetch', workGetMessageFetch)
	yield takeEvery('messages/updateMessages', workGetUpdateMessage)
}

