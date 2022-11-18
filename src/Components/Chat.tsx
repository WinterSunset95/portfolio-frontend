




import { useState, useEffect, ReactNode } from 'react'
import { db, database } from '../Firebase'
import { doc, onSnapshot, collection, addDoc, orderBy, query } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

interface Props {
	text?: ReactNode
	user?: ReactNode
	pos?: ReactNode
}

const Msg = ({ text, user, pos }: Props) => {
	return (
		<div className={`w-fit rounded-md bg-[rgba(20,20,20,1)] text-[#f6f6f6] m-1 ${pos == 'left' ? '' : 'self-end'}`}>
			<small className={`p-2 text-xs ${pos == 'left' ? '' : 'text-red-400'}`}>{user}</small>
			<div className="p-2 m-1 rounded-md bg-[rgba(30,30,30,1)]">
				{text}
			</div>
		</div>
	)
}

const Chat = () => {
	const [chat, setChat]	= useState(false)
	const [user, setUser]	= useState('Anonymous')
	const [uid, setUid] = useState('Anonymous')

	const auth = getAuth()
	if (user == 'Anonymous' && auth.currentUser) {
		signOut(auth)
		.then(() => console.log('Signed out'))
		.catch((error) => console.log(error))
	} else {
		console.log('no errors')
	}

	const login = () => {
		if (!auth.currentUser) {
			signInWithPopup(auth, new GoogleAuthProvider())
			.then((result) => {
				if (result.user.displayName && result.user.uid) {
					setUser(result.user.displayName)
					setUid(result.user.uid)
				}
			})
		}
	}

	const messagesRef = query(collection(db, 'messages'), orderBy('timestamp'))
	const [messages] = useCollectionData(messagesRef)

	const add = async () => {
		var d = new Date()
		var utc = d.getTime()
		if (messages) {
			const node = (document.getElementById('input-field') as HTMLInputElement)
			const value = node.value
			node.value = ""
			await addDoc(collection(db, 'messages'), {
				'user': user,
				'uid': uid,
				'timestamp': utc,
				'message': value
			})
		}
	}

	const typing = (e:any) => {
		if (e.keyCode == 13 && (e.target as HTMLInputElement).value != '') {
			add()
		}
	}

	useEffect(() => {
		const node = document.getElementById('message-container')
		node!.scrollTo(0, node!.scrollHeight)
		console.log(messages)
	}, [messages])

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
							messages?.map(item => <Msg key={item.timestamp} text={item.message} user={item.user} pos={item.uid == uid ? 'right' : 'left'}/>)
						}
					</section>
					<section className="flex justify-around items-center m-1 h-fit">
						{
							user != 'Anonymous' ?
							<>
								<input type="text" className="rounded-full h-full p-1" id="input-field" onKeyDown={(event) => typing(event)}/>
								<button className="rounded-full bg-black text-white p-2" onClick={() => add()}>Send</button>
							</> : <div className="p-2 bg-blue-400 rounded-lg cursor-pointer" onClick={() => login()}>Login to send messages</div>
						}
					</section>
				</div>
			</div>
		</div>
	)
}

export default Chat
