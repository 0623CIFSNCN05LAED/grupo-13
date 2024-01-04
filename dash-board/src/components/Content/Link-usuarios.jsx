import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserLink({ id, name }) {
  return (
    <Link to={`/users/${id}`}>
      <button
        type='button'
        className='list-group-item list-group-item-action text-center'
      >
        {name}
      </button>
    </Link>
  );
}

UserLink.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserLink;
