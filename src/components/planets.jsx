import { useEffect, useState } from 'react';
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
		<div className="--scrollable">
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
									<td>{planet.diameter != null ? planet.diameter.toLocaleString() + 'km' : ''}</td>
									<td>{planet.population != null ? planet.population.toLocaleString() : ''}</td>
									<td>{planet.terrain != null ? planet.terrain : ''}</td>
									<td>{planet.climate != null ? planet.climate : ''}</td>
									<td>{planet.rotation_period != null ? planet.rotation_period.toLocaleString() : ''}</td>
									<td>{planet.orbital_period != null ? planet.orbital_period.toLocaleString() : ''}</td>
								</tr>
							)
						}))
						:
						<tr><td colSpan={100}>No planets, please wait</td></tr>
					}
				</tbody>
			</table>
		</div>
	)
}
