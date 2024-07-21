import PropTypes from 'prop-types';
import './EmployeeModal.css';

// eslint-disable-next-line react/prop-types
const UserModal = ({ user, onClose }) => {
  if (!user) return null; // Return null if no user is provided

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>User Details</h2>
        <img src={user.imagePreview || "default-image.png"} alt="User" />
        <p><strong>Names:</strong> {user.names}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone No.:</strong> {user.phoneNo}</p>
        <p><strong>Position:</strong> {user.position}</p>
        <p><strong>ID:</strong> {user.ID}</p>
      </div>
    </div>
  );
};

UserModal.propTypes = {
  user: PropTypes.shape({
    imagePreview: PropTypes.string,
    names: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    ID: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default UserModal;
