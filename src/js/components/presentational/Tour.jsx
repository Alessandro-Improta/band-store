import React from 'react';
import { ProductConsumer } from '../container/context.jsx';

const Tour = () => (
	<table className="u-full-width">
		{/*<thead>
			<tr>
				<th>Date</th>
				<th>City</th>
				<th>Venue</th>
				<th>Tickets</th>
			</tr>
		</thead>*/}
		<tbody>
			<ProductConsumer>
			  	{
			  		(value) => {
			  			const { dates } = value;
			  			return dates.map(show => {
			  				return (
			  					<tr>
			  						<td>{show.date}</td>
			  						<td>{show.city}</td>
			  						<td>{show.venue}</td>
			  						<td><a href={show.tickets}>Buy Tickets</a></td>
			  					</tr>
			  				)
			  			})
			  		}
			  	}
			</ProductConsumer>
		</tbody>
	</table>
)

export default Tour;