//IMPORT MODULES
import React from 'react';
import { Link } from 'react-router';

//IMPORT COMPONENTS 
import IndividualMarket from './IndividualMarket';

//IMPORT CSS
import '../../../styles/homepage/homepage.css';

//BUILD COMPONENT
const Search = React.createClass({
	getInitialState() {
		return(
			{
				savedMarkets: [],
				marketName: "",
				marketAddress: "",
			}
		)
	},
	render() {
		return(
			<div>
				<div className="homepage-container">
					
					<div className="greeting-container">
						<div className="greeting-photo">
							PHOTO GOES HERE
						</div>
						<div className="greeting-message">
							Welcome, User!
						</div>
					</div>

					<div className="treasure-chest-container">
						<div className="treasure-chest-title">
							TREASURE CHEST
						</div>

						<div className="treasure-chest-left">
							<div className="treasure-chest-left-graph">
								
							</div>
							<div className="treasure-chest-left-title">
								SNAP
							</div>
						</div>

						<div className="treasure-chest-right">
							<div className="treasure-chest-right-graph">
								
							</div>
							<div className="treasure-chest-right-title">
								CASH
							</div>
						</div>
					</div>

					<div className="watering-holes-container">
						<div className="watering-holes-title-container">
							YOUR WATERING HOLES
						</div>
						<div className="watering-holes-individual-container">
							
						</div>
					</div>

				</div>
			</div>
		)
	}
});

export default Search;