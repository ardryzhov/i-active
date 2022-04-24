import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import messageReducer from './messageSlice'
import messageSaga from './messageSaga'

const saga = createSagaMiddleware()

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, messageReducer)

export const store = configureStore({
	reducer: {
		message: persistedReducer
	},
	middleware: [saga]
})

export const persistor = persistStore(store)

saga.run(messageSaga)

export type RootState = ReturnType<typeof store.getState>