import React from 'react';
import './bootstrap.min.css';
import { PageHeader } from './Layout';

function Article() {
	return (
		<section className='container'>
			<div className='py-5'>
				<p>Wastebin</p>
			</div>
		</section>
	);
}

function Project(){
	return (
		<main className='py-5'>
<PageHeader title="WHAT WE DO"/>
<Article />
</main>
		);
}

export default Project;