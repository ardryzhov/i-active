export interface IMessage {
	postId: number,
	id: string,
	name: string,
	body: string,
	favorite: boolean
}

export interface IState {
	message: IMessage[],
	loading: boolean,
	newMessagePosition: string
}