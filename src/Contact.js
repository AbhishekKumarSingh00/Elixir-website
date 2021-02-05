import React, {useState} from "react";
import Footer from "./Footer";
import './Event.css';

const Contact = () => {

	const [data,setData] = useState({
		fullname:'',
		mobileNo: '',
		email: '',
		msg: '',
	});
	const InputEvent = (event) => {
		const {name,value} = event.target;

		setData((preVal) => {
			return {
					...preVal,
					[name] : value,				
				};
		});
	};
	const formSubmit = (e) => {
		e.preventDefault()
		alert(
	`Dear ${data.fullname}, your Message is recorderd`
	);
	};

	return (
		<>
		<div className="my-5">
			<h1 className="text-center text"> Contact with us </h1>
		</div>
		<div className="container contact_div">
			<div className="row">
				<div className = "col-md-6 col-10 mx-auto">
					<form onSubmit={formSubmit}>

					  <div class="mb-3">
					  <label for="exampleFormControlInput1" className="form-label text">Email address</label>
					  <input type="email" 
					  class="form-control"
					   id="exampleFormControlInput1"
					   name="email"
					   value={data.email}
					   onChange={InputEvent}
					    placeholder="name@gmail.com" />
					</div>

					<div class="mb-3">
					  <label for="exampleFormControlInput1"
					   className="form-label text">
					   Name
					   </label>
					  <input type="text" 
					  class="form-control"
					   id="exampleFormControlInput1"
					   name="fullname"
					   value={data.fullname}
					   onChange={InputEvent}
					    placeholder="write your full name" />
					</div>

					<div class="mb-3">
					  <label for="exampleFormControlInput1" 
					  className="form-label text">
					  Mobile
					  </label>
					  <input type="number" 
					  class="form-control"
					   id="exampleFormControlInput1"
					   name="mobileNo"
					   value={data.mobileNo}
					   onChange={InputEvent}
					    placeholder="Mobile number" />
					</div>



					<div class="mb-3">
					  <label for="exampleFormControlTextarea1" 
					  className="form-label text">
					  Message
					  </label>
					  <textarea class="form-control"
					   id="exampleFormControlTextarea1"
					   rows="3"
					   name="msg"
					   value={data.msg}
					   onChange={InputEvent}>
					   </textarea>
					</div>

					<div class="col-12">
				    <button class="btn btn-outline-primary" type="submit">Submit</button>
				  </div>

					</form>
				</div>
			</div>
		</div>
		<div className = "text-center">
		<Footer />
		</div>
		</>
	);
};

export default Contact;