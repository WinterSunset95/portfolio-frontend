





import {useState, useEffect } from 'react'
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from '../Firebase'

const Til = () => {
	const addData = async (e: String) => {
		console.log(e)
		try {
			const docRef = await addDoc(collection(db, "test"), {
				test: e
			})
			console.log("Added data with id: ", docRef.id)
		} catch {
			console.log("error")
		}
	}
	const get = async () => {
		const coll = collection(db, 'test')
		const doc = await getDocs(coll)
		const list = doc.docs.map(doc => doc.data())
		console.log(list)
	}
	return (
		<div>
			This page contains the today-i-learned section
			<button onClick={() => addData("Hello firebase")}>Click me</button>
			<button onClick={() => get()}>Click me</button>
		</div>
	)
}

export default Til
