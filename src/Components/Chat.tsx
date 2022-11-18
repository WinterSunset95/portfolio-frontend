




import { useState, useEffect, ReactNode } from 'react'
import { db, database } from '../Firebase'
import { doc, onSnapshot, collection, addDoc, orderBy, query } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

interface Props {
	text?: ReactNode
}

const Msg = ({ text }: Props) => {
	return (
		<div className="w-fit rounded-md p-2 px-4 bg-[rgba(20,20,20,1)] text-[#f6f6f6] m-1">{text}</div>
	)
}

const Chat = () => {
	const [chat, setChat]	= useState(false)

	const messagesRef = collection(db, 'messages')
	const [messages] = useCollectionData(messagesRef)

	const add = async () => {
		if (messages) {
			const node = (document.getElementById('input-field') as HTMLInputElement)
			const value = node.value
			const last = messages[messages.length - 1]
			node.value = ""
			await addDoc(collection(db, 'messages'), {
				'index': last.index + 1,
				'message': value
			})
		}
	}

	return (
		<div className="sticky bottom-5 w-full flex justify-end items-center px-8">
			<div className="relative">
				<div className={`${chat ? 'scale-0' : ''} ease-in-out duration-300`} onClick={() => setChat(true)}>
					<i className="text-[#f6f6f6] fa-solid fa-2x fa-message"></i>
				</div>
				<div className={`absolute top-0 left-0 -translate-x-full -translate-y-full ${chat ? '' : 'scale-0'} ease-in-out duration-300 border-2 rounded-md flex flex-col bg-[rgba(50,50,50,0.9)]`}>
					<div className="flex justify-between items-center p-4 w-72 m-1 bg-[rgba(20,20,20,1)]">
						<div className="Montserrat text-[#f6f6f6]">Global Chat</div>
						<i className="fa-regular fa-circle-xmark text-[#f6f6f6]" onClick={() => setChat(false)}></i>
					</div>
					<section id="message-container" className={`flex flex-col w-full h-96 grow overflow-x-hidden overflow-y-scroll`}>
						{
							messages?.map(item => <Msg key={item.index} text={item.message}/>)
						}
					</section>
					<section className="flex justify-around items-center m-1 h-fit">
						<input type="text" className="rounded-full h-full p-1" id="input-field"/>
						<button className="rounded-full bg-black text-white p-2" onClick={() => add()}>Send</button>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Chat
