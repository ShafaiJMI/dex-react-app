import React from 'react';
import { useState } from 'react';
import { PageHeader } from './Layout';
import './bootstrap.min.css';

function ContactForm() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}));
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
	}

	return (
			<form className="container py-5 mb-3" onSubmit={handleSubmit}>
				<div className="input-group mb-3">
					<input type="text" className="form-control rounded-0" name="fullname" value={inputs.fullname || ""} onChange={handleChange} placeholder="Full name" aria-label="Full  name" aria-describedby="basic-addon1"/>
				</div>
				<div className="input-group mb-3">
					
					<input type="text" className="form-control rounded-0" name="email" value={inputs.email || ""} onChange={handleChange} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
				</div>
				<div className="input-group mb-3">
					<input type="text" className="form-control rounded-0" name="phone" value={inputs.phone || ""} onChange={handleChange} placeholder="Phone numer" aria-label="Phone number" aria-describedby="basic-addon1"/>
				</div>
				<div className="input-group">
					<span className="input-group-text rounded-0">Message</span>
					<textarea className="form-control rounded-0" name="message" value={inputs.message || ""} onChange={handleChange} aria-label="With textarea"></textarea>
				</div>
				<input className="btn btn-primary rounded-0 my-3" type="submit" name="submit"/>
			</form>
		);
}

function Contact(){
	return (
	<main className='py-5'>
	<PageHeader title="GET IN TOUCH"/>
	<section className="container">
	<div className="row">
		<div className="col-md-5">
			<div className="py-5">
				<h5>Office Address</h5>
				<p>Jamia Nagar, New Delhi, Delhi 110025</p>
			</div>
			<div className="py-5">
				<h5>Enquiries</h5>
				<div className="mt-2">
				<a href="mailto:dexteronix@outlook.com">dexteronix@outlook.com</a>
			    <a href="tel:+917277514262">+91 7277514262</a>
				<a href="tel:+918750522729">+91 8750522729</a>
				</div>
			</div>
		</div>
		<div className="col-md-6">
			<ContactForm />
		</div>
	</div>
</section>
</main>
		);
}

export default Contact;