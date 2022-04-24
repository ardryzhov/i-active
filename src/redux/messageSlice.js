import { createSlice, current } from '@reduxjs/toolkit'

const messageSlice = createSlice({
	name: 'messages',
	initialState: {
		message: [],
		newMessagePosition: 'bottom',
		loading: false
	},
	reducers: {
		getMessageFetch(state) {
			state.loading = true
		},
		getMessageFetchSuccess(state, action) {
			state.message = action.payload
			state.loading = false
		},
		getMessageFetchFailure(state) {
			state.loading = false
		},
		addMessageToFavorite(state, action) {	
			const newState = state.message.map(v => {
				if (v.id === action.payload.id) {
					v.favorite = true
				}
				return v
			})
			state.message = newState
		},
		deleteMessageInFavorite(state, action) {
			const newState = state.message.map(v => {
				if (v.id === action.payload.id) {
					v.favorite = false
				}
				return v
			})
			state.message = newState
		},
		updateMessages() {},
		getUpdateMessageSuccess(state, action) {
			console.log(current(state.message))
			state.newMessagePosition === 'bottom' 
				? state.message.push(action.payload) 
				: state.message.unshift(action.payload)
		},
		pushMessage(state) {
			state.newMessagePosition = 'bottom'
		},
		unshiftMessage(state) {
			state.newMessagePosition = 'top'
		}
	}
});

export const { getMessageFetch, getMessageFetchSuccess, addMessageToFavorite, deleteMessageInFavorite, updateMessages, getUpdateMessageSuccess, pushMessage, unshiftMessage } = messageSlice.actions
export default messageSlice.reducer
