import { useState, useEffect } from 'react';
import './DeletedEmployee.css';

const DeletedUser = () => {
    const [deletedUsers, setDeletedUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('deletedUsers')) || [];
        setDeletedUsers(data);
        setFilteredData(data); // Initialize filtered data with the full dataset
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = deletedUsers.filter(user =>
                user.ID.toString().includes(searchTerm) // Convert ID to string and filter
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(deletedUsers);
        }
    }, [searchTerm, deletedUsers]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    return (
        <div className="DeletedUser">
            <div className='searchBar bar2'>
                <input 
                    type="text" 
                    placeholder="Search by ID" 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                />
            </div>
            <div className="table">
                <h1>Removed Employees</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Names</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>Position</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={user.imagePreview || "default-image.png"} alt="User" />
                                </td>
                                <td>{user.names}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNo}</td>
                                <td>{user.position}</td>
                                <td>{user.ID}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeletedUser;
