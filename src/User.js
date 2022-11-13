import React from "react";

class User extends React.Component {
    render() {
        return (<div className="user-card">
            <div>
                <div>#{this.props.user.id}</div>
                <div>{this.props.user.login}</div>
                <div>{this.props.user.score}</div>
                <div><a href={"/profile/" + this.props.user.login}>Profile</a></div>
            </div>
            <div>
                <img className="user-img" alt="" src={this.props.user.avatar_url} width="150" height={150} />
            </div>
        </div>
        )
    }
}

export default User;