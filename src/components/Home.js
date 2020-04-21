import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import PollList from './PollList'

class Home extends Component {
	render(){
		return (
			<div className="container py-5">
				<div className="row d-flex flex-row justify-content-center">
					<div className="col-8">
						<div className="card">
							<PollList />
						</div>
					</div>
				</div>
			</div>
		  )
	}
}

export default Home
