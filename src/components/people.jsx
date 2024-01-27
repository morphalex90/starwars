import { useEffect, useState } from 'react';
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
		<div className="--scrollable">
			<table className="table">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Altezza</th>
						<th>Massa</th>
						<th>Pianeta</th>
						<th>Gender</th>
					</tr>
				</thead>
				<tbody>
					{people.length > 0 ?
						(people.map((person) => {
							return (
								<tr key={person.id}>
									<td>{person.name}</td>
									<td>{person.height != null ? person.height.toLocaleString() + 'cm' : ''}</td>
									<td>{person.mass != null ? person.mass.toLocaleString() + 'kg' : ''}</td>
									<td>{person.planet != null ? person.planet.name : ''}</td>
									<td>{person.gender != null ? person.gender : ''}</td>
								</tr>
							)
						}))
						:
						<tr><td colSpan={100}>No people, please wait</td></tr>
					}
				</tbody>
			</table>
		</div>
	)
}
