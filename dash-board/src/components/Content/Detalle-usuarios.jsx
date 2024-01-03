import { Component } from 'react';
import PropTypes from 'prop-types';

class UserDetail extends Component {
  constructor({ match }) {
    super();
    const { id } = match.params;

    this.state = {
      id: id,
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (prevProps.match.params.id !== id) {
      this.setState({ id: id }, this.fetchUser);
    }
  }

  fetchUser = async () => {
    const response = await fetch(
      `http://localhost:3000/api/users/${this.state.id}`
    );
    const result = await response.json();
    this.setState({ user: result.data });
  };

  render() {
    const { user } = this.state;
    return user ? (
      <div>
        <h3>ID: {user.id}</h3>
        <p>Nombre: {user.first_name}</p>
        <p>Apellido: {user.last_name}</p>
        <p>Email: {user.email}</p>
        <img className='profileImage' src={user.image} alt='Profile' />
      </div>
    ) : (
      'Cargando...'
    );
  }
}

UserDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default UserDetail;
