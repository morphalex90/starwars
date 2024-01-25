import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import axios from '@/lib/axios';

export default function People() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		getPeople();
	}, []);

	const getPeople = async () => {
		await axios.get('/api/v1/sw/people')
			.then((response) => {
				setPeople(response.data.people);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<>
			<Head>
				<link rel="canonical" href="https://starwars.icu/people" />
				<title>People | StarWars</title>
				{/* <meta name="description" content="Do you need cats? Are you having a bad day? Here you can find all the cats you need" /> */}

				<meta property="og:type" content="website" />
				<meta property="og:title" content="People | StarWars" />
				{/* <meta property="og:description" content="Do you need cats? Are you having a bad day? Here you can find all the cats you need" /> */}
				<meta property="og:url" content="https://starwars.icu/people" />
			</Head>

			<Layout>
				<section className="section">
					<div className="section__container">
						<table className="table">
							<thead>
								<tr>
									<th>Nome</th>
									<th>Altezza</th>
								</tr>
							</thead>
							<tbody>
								{people.length > 0 ?
									<>
										{(people.map((person) => {
											return (
												<tr key={person.id}>
													<td>{person.name}</td>
													<td>{person.height != null ? person.height + 'cm' : ''}</td>
												</tr>
											)
										}))}
									</>
									:
									<tr><td>No People, please wait</td></tr>
								}
							</tbody>
						</table>
					</div>
				</section>
			</Layout>
		</>
	)
}
