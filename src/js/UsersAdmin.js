import React, {Component} from 'react';
import '../css/adminFiles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import axios from "axios";

class UsersAdmin extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      });
  }

  successShow(response) {
    this.setState({
      people: response.data.data
    });
  }

  render() {
    return (
        <ul>
          {this.state.people.map(({id, first_name, last_name, avatar}) => (
            <li key={id}>
              First Name: {first_name} Last Name: {last_name} avatar: {avatar}
            </li>))
          }
        </ul>
      );
  }
}
export default UsersAdmin;