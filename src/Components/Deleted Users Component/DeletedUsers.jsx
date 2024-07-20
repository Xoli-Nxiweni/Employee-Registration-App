import { useState, useEffect } from 'react';
import './DeletedUsers.css'; // Add your styles

const DeletedUser = () => {
    const [deletedUsers, setDeletedUsers] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('deletedUsers')) || [];
        setDeletedUsers(data);
    }, []);

    return (
        <div className="DeletedUser">
            <div className="table">
                <h1>Deleted Employees</h1>
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
                        {deletedUsers.map((user, index) => (
                            <tr key={index}>
                                <td><img src={user.imagePreview || "default-image.png"} alt="User" /></td>
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
