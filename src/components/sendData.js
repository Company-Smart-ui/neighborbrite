
import {useRef, useState, FC, useEffect} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const fetcher = (url) => fetch(url).then((res) => res.json());

export const SendData =({email=""})=> {

	const [search , setSearch]= useState("");

	useEffect(()=>{
		findHandler( )
	},[])

	const refEmail = useRef(null);
	const refText = useRef(null);
	const serchRef = useRef(null);

	const submitHandler= (e )=>{
		e.preventDefault()
		axios.post("api/emails",{
			email:refEmail.current.value,
			text:refText.current.value
		})
			.catch(e=>console.log(e))
			.then((e)=>{
				console.log(e)
				toast("done")

			})

	}



	const findHandler= (e )=>{
		e?.preventDefault()

		axios.get("api/emails/?email="+serchRef.current.value, )
			.catch(e=>{
				console.log(e)
				setSearch("404")
			})
			.then((e)=>{
				console.log(e?.data.Item.text.S)
					setSearch(e?.data?.Item?.text.S)
				}
			)


	}
	return <section>
<br/><br/>
		<h1> serch from db</h1>

		<hr/>
		<form onSubmit={findHandler} >
			<input defaultValue={email+""} ref={serchRef} type="text"/>
			<button> find </button>
			<ToastContainer />
		</form>
		<br/> <br/>
<h2> your text : </h2><br/>
		<b>{search||"wrong email"}</b>
		<hr/>
<br/>
		<br/>

		<form  onSubmit={submitHandler}>
			<h3>push to db </h3>
			<br/>
			<label htmlFor=""> email
				<input defaultValue={email+""} ref={refEmail} type="email"/>


			</label>    <br/>
			<br/>

			<label htmlFor=""> text

			<input ref={refText} type="text"/>

		</label>
			<button> push</button>
		</form>
	</section>
}
