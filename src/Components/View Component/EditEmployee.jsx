import { useState, useEffect } from 'react';
import './EditEmployee.css';

// eslint-disable-next-line react/prop-types
const EditUser = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState(user);

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="editUserContainer">
            <div className="editUserModal">
                <form onSubmit={handleSubmit}>
                    <div className='inputContainer2'>
                        <label htmlFor="names">Names</label>
                        <input type="text" id="names" value={formData.names} onChange={handleChange} />
                    </div>
                    <div className='inputContainer2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className='inputContainer2'>
                        <label htmlFor="phoneNo">Phone No.</label>
                        <input type="tel" id="phoneNo" value={formData.phoneNo} onChange={handleChange} />
                    </div>
                    <div className='inputContainer2'>
                        <label htmlFor="ID">ID</label>
                        <input type="text" id="ID" value={formData.ID} onChange={handleChange} disabled />
                    </div>
                    <div className='inputContainer2'>
                        <label htmlFor="position">Position</label>
                        <input type="text" id="position" value={formData.position} onChange={handleChange} />
                    </div>
                    <div className="formActions">
                        <button type="submit">Save</button>
                        <button type="button" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
