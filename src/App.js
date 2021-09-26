import react, { Component } from "react";

class App extends Component {
  state = {
    isLoading: false,
    userData: []
  };
  async componentDidMount(){
      const response = await fetch('awsurl');
      const body = await response.json();
      this.setState({ userData:body,isLoading:false })
  }
  remove(id) {
    let updateduser = [...this.state.userData.filter((i) => i.id !== id)];
    this.setState({ userData: updateduser });
  }

  render() {
    const isLoading = this.state.isLoading;
    const users = this.state.userData;

    if (isLoading) return <div>Loading ...</div>;

    let usersData = users.map((usersData) => (
      <tr key={usersData.id}>
        <td>{usersData.id}</td>
        <td>{usersData.user}</td>
        <td>{usersData.date}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.remove(usersData.id)}
          >
            Delete
          </button>
        </td>
        
      </tr>
    ));

    return (
      <div className="container border border-secondary rounded center mt-3 col-md-6">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center p-2">User Data</h4>
          </div>
        </div>
        <div className="row">
          <div className=".col-xs-12 center text-center">
            <table className="table table-responsive table-bordered table-striped table-hove">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>USER</th>
                  <th>DATE</th>
                  <th colSpan="4">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {this.state.userData === 0 ? (
                  <td colSpan="9" className="p-2 text-dark">All cought up!</td>
                ) : (
                  usersData
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
