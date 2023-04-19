import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import axios from '@/lib/axios';

export default function Home() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		getPeople();
	}, []);

	const getPeople = async () => {

		await axios.get('/people')
			.then((response) => {
				setPeople(response.data.results);
				console.log(response.data.results);
			})
			.catch((error) => {
				console.error(err);
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
						{people.length > 0 &&
							<div>
								{(people.map((person, id) => {
									return (
										<div key={id}>{person.name}</div>
									)
								}))}
							</div>
						}
					</div>
				</section>

			</Layout>
		</>
	)
}
