import React from "react";
import User from "./User";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            page: 0,
            pageSize: 30
        }
    }

    getNextPage() {
        this.setState(prev => ({ page: prev.page + prev.pageSize }), this.getUsers);
    }

    getPreviousPage() {
        if (this.state.page > this.state.pageSize)
            this.setState(prev => ({ page: prev.state.page - prev.state.pageSize }), this.getUsers);
    }

    async getUsers() {
        var response = await fetch("https://api.github.com/users?" + new URLSearchParams({ since: this.state.page, per_page: this.state.pageSize }));
        var data = await response.json();
        this.setState({ users: data });
        //console.log(data);
    }

    async componentDidMount() {
        console.log("Home component did mount!");
        await this.getUsers();
    }

    componentWillUnmount() {
        console.log("Home component will unmount!");
    }

    handleNextPageClick() {
        this.getNextPage();
    }

    handlePreviousPageClick() {
        this.getPreviousPage();
    }

    render() {
        return <div>
            <div style={{ display: "flex", margin: "5px" }}>
                <div><button onClick={() => this.handlePreviousPageClick()}>Previous</button></div>
                <div><button onClick={() => this.handleNextPageClick()}>Next</button></div>
            </div>
            {this.state.users.map((user) => {
                return <User key={user.login} user={user}></User>
            })}
        </div>
    }
}

export default Home;