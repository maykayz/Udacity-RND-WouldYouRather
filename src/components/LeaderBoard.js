import React, {Component} from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem'

class LeaderBoard extends Component {

	render(){
    const users = this.props.users
		return (
				<div className="py-5 container">
					<div className="row d-flex flex-row justify-content-center">
						<div className="col-8 bg-white p-3">
						{
								users.map((user,index) => (
									<div className="position-relative" key={index}>
											<UserItem user={user}/>

												{index === 0
													? <div className="prize-tag gold">1st</div>
													: index === 1 ? <div className="prize-tag silver">2nd</div>
													: <div className="prize-tag bronze">3rd</div>
												}

									</div>
								))
						}

						</div>
					</div>
				</div>
		  )
	}
}
function calculateTotal (user){
  return Object.keys(user.answers).length+ user.questions.length
}
function mapStateToProps ({ users }) {
    const sortedUsers = Object.values(users).sort((a,b) => calculateTotal(b) - calculateTotal(a))
		sortedUsers.length = 3
    return {
  		users: sortedUsers
    }
}
export default connect(mapStateToProps)(LeaderBoard)
