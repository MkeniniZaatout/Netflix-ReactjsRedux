import React, {Component} from "react";
import {connect} from "redux"; 
class UserList extends Component {
    /*
   constructor (props) {
        super(props);
   }
   */

    render () {
        return (
            <div>
                <ul className="col-md-4">
                    {
                        this.props.users.map((user) => {
                            <li className="list-group-item" key={user.id}>
                                {user.name}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }

}


function mapStateToProps (state) {
    return {myUsers : state.user}
}

export default connect(mapStateToProps)(UserList);