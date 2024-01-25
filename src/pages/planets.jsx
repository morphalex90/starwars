import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import axios from '@/lib/axios';

export default function Planets() {
	const [planets, setPlanets] = useState([]);

	useEffect(() => {
		getPlanets();
	}, []);

	const getPlanets = async () => {
		await axios.get('/api/v1/sw/planets')
			.then((response) => {
				setPlanets(response.data.planets);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<>
			<Head>
				<link rel="canonical" href="https://starwars.icu/planets" />
				<title>Planets | StarWars</title>
				{/* <meta name="description" content="Do you need cats? Are you having a bad day? Here you can find all the cats you need" /> */}

				<meta property="og:type" content="website" />
				<meta property="og:title" content="Planets | StarWars" />
				{/* <meta property="og:description" content="Do you need cats? Are you having a bad day? Here you can find all the cats you need" /> */}
				<meta property="og:url" content="https://starwars.icu/planets" />
			</Head>

			<Layout>
				<section className="section">
					<div className="section__container">
						<table className="table">
							<thead>
								<tr>
									<th>Nome</th>
									<th>Diametro</th>
								</tr>
							</thead>
							<tbody>
								{planets.length > 0 ?
									<>
										{(planets.map((planet) => {
											return (
												<tr key={planet.id}>
													<td>{planet.name}</td>
													<td>{planet.diameter != null ? planet.diameter + 'km' : ''}</td>
												</tr>
											)
										}))}
									</>
									:
									<tr><td>No planets, please wait</td></tr>
								}
							</tbody>
						</table>
					</div>
				</section>
			</Layout>
		</>
	)
}
