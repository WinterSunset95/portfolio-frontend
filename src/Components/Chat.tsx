




import { useState, useEffect, ReactNode } from 'react'
import { database } from '../Firebase'
import { set, ref } from 'firebase/database';

interface Props {
	text?: ReactNode
}

const write = (msg:any) => {
	set(ref(database, 'trial/'), {
		2: 'this is bullshit'
	})
}

const Msg = ({ text }: Props) => {
	return (
		<div className="w-fit rounded-md p-2 px-4 bg-[rgba(20,20,20,1)] text-[#f6f6f6] m-1">{text}</div>
	)
}

const Chat = () => {
	const [chat, setChat]	= useState(false)
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
					<section className={`flex flex-col w-full h-96 grow overflow-x-hidden overflow-y-scroll`}>
						<Msg text="Hello human" />
					</section>
					<section className="flex justify-around items-center m-1 h-fit">
						<input type="text" className="rounded-full h-full p-1"/>
						<button className="rounded-full bg-black text-white p-2" onClick={() => write("HIIIIIII")}>Send</button>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Chat
