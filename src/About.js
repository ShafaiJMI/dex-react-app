import React from 'react';
import './bootstrap.min.css';
import { PageHeader } from './Layout';

function Member(props){
	return (
		<div className="col">
				<div className="card border-0" aria-hidden="true">
					<span className="placeholder bg-danger col-12 py-5"></span>
					
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<p>{props.role}</p>
						<a href="#" tabindex="-1" className="btn btn-primary">Learn more</a>
					</div>
				</div>
		</div>
	);
}

function Team(){
	const members = [
		{id:1,name:'Maaz',role:'CEO'},
		{id:1,name:'Shadab',role:'CTO'},
		{id:1,name:'Pranjal',role:'COO'}
	]
	return (
		<section>
	<div className="container py-5">
		<div className="text-md-center mb-3">
			<h4>OUR TEAM</h4>
		</div>
		<div className="row row-cols-1 row-cols-md-3 g-4">
			{members.map((member) => <Member name={member.name} role={member.role}/>)}
		</div>
	</div>
</section>
	);
}


function About(){
	return (
		<main className='py-5'>
<PageHeader title="WE WORK FOR A SMARTER FUTURE"/>
<section>
	<div className="container row py-5 mx-auto">
		<div className="col-md-6">
			<p className="text-info">OUR MISSION</p>
			<p>To become an indispensable partner to our clients by offering the finest products and solutions to their problem in the field of technology combined with localization and service excellence. To envision design and construct the most magnificent products and software and provides quality return on investment to our customers.</p>
		</div>
		<div className="col-md-6">
			<p className="text-info">OUR VALUES</p>
			<p>Quality, customer satisfaction, Transparency, After sales service, corporate responsibility are the pillars of our values  and form the corner stone of our approach that webring of our approach that we bring to every engagement.</p>
		</div>
	</div>
	<div className="container text-md-center py-5 mx-auto">
		<p className="text-info">OUR VISION</p>
		<div className="">
			<p>
				To use our industry insights and domain experience to our advantage and provide innovative, high quality, superior and cost effective solutions that brings overwhelming growth to the society and the stakeholders. To becoming the leading edge to technology provider in India, South East Asia and Middle East by creating high quality products and services in order to fulfill our clients expectation and achieve measurable competitive advantage.
			</p>
		</div>
	</div>
</section>
<Team />
		</main>
		);
}

export default About;