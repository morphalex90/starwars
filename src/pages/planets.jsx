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
									<th>Popolazione</th>
									<th>Terreno</th>
									<th>Clima</th>
									<th>Periodo di rotazione</th>
									<th>Periodo orbitale</th>
								</tr>
							</thead>
							<tbody>
								{planets.length > 0 ?
									(planets.map((planet) => {
										return (
											<tr key={planet.id}>
												<td>{planet.name}</td>
												<td>{planet.diameter != null ? planet.diameter + 'km' : ''}</td>
												<td>{planet.population != null ? planet.population : ''}</td>
												<td>{planet.terrain != null ? planet.terrain : ''}</td>
												<td>{planet.climate != null ? planet.climate : ''}</td>
												<td>{planet.rotation_period != null ? planet.rotation_period : ''}</td>
												<td>{planet.orbital_period != null ? planet.orbital_period : ''}</td>
											</tr>
										)
									}))
									:
									<tr><td colSpan={100}>No planets, please wait</td></tr>
								}
							</tbody>
						</table>
					</div>
				</section>
			</Layout>
		</>
	)
}
