// import { useEffect, useState } from 'react';
// import { MdAdd } from "react-icons/md";
// import EditUser from './EditEmployee';
// import './ViewEmployee.css';

// // eslint-disable-next-line react/prop-types
// const ViewUser = ({ onAddUserClick }) => {
//     const [userData, setUserData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [editUser, setEditUser] = useState(null);

//     const fetchData = () => {
//         const data = JSON.parse(localStorage.getItem('userData')) || [];
//         setUserData(data);
//         setFilteredData(data);
//     };

//     useEffect(() => {
//         fetchData();

//         const handleStorageChange = () => {
//             fetchData();
//         };

//         window.addEventListener('storage', handleStorageChange);

//         return () => {
//             window.removeEventListener('storage', handleStorageChange);
//         };
//     }, []);

//     useEffect(() => {
//         if (searchTerm) {
//             const filtered = userData.filter(user =>
//                 user.ID.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//             setFilteredData(filtered);
//         } else {
//             setFilteredData(userData);
//         }
//     }, [searchTerm, userData]);

//     const handleSearchChange = (event) => {
//         const value = event.target.value;
//         if (/^\d*$/.test(value)) {
//             setSearchTerm(value);
//         }
//     };

//     const handleDelete = (userId) => {
//         const updatedData = userData.filter(user => user.ID !== userId);
//         const deletedUser = userData.find(user => user.ID === userId);
//         localStorage.setItem('userData', JSON.stringify(updatedData));
//         setUserData(updatedData);

//         // Save deleted user to "deletedUsers" in localStorage
//         const deletedUsers = JSON.parse(localStorage.getItem('deletedUsers')) || [];
//         deletedUsers.push(deletedUser);
//         localStorage.setItem('deletedUsers', JSON.stringify(deletedUsers));
//     };

//     const handleEdit = (user) => {
//         setEditUser(user);
//     };

//     const handleSave = (updatedUser) => {
//         const updatedData = userData.map(user =>
//             user.ID === updatedUser.ID ? updatedUser : user
//         );
//         localStorage.setItem('userData', JSON.stringify(updatedData));
//         setUserData(updatedData);
//         setEditUser(null);
//     };

//     const handleCancel = () => {
//         setEditUser(null);
//     };

//     return (
//         <div className='flex'>
//             <div className='functions'>
//                 <div className='searchBar'>
//                     <input 
//                         type="text" 
//                         placeholder="Search by ID" 
//                         value={searchTerm} 
//                         onChange={handleSearchChange} 
//                     />
//                 </div>
//                 <div className='Add'>
//                     <button className='addBtn' onClick={onAddUserClick}><MdAdd /></button>
//                 </div>
//             </div>
//             <div className="table">
//                 <h1>Active Employees</h1>
//                 <table>
//                     <thead>
//                     <tr>

//                             <th>Image</th>
//                             <th>Names</th>
//                             <th>Email</th>
//                             <th>Phone No.</th>
//                             <th>Position</th>
//                             <th>ID</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredData.map((user, index) => (
//                             <tr key={index}>
//                                 <td><img src={user.imagePreview || "default-image.png"} alt="User" /></td>
//                                 <td>{user.names}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.phoneNo}</td>
//                                 <td>{user.position}</td>
//                                 <td>{`0${user.ID}`}</td>
//                                 <td>
//                                     <button className='editBtn' onClick={() => handleEdit(user)}>edit</button>
//                                     <button className='deleteBtn' onClick={() => handleDelete(user.ID)}>delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {editUser && <EditUser user={editUser} onSave={handleSave} onCancel={handleCancel} />}
//         </div>
//     );
// };

// export default ViewUser;


import { useEffect, useState } from 'react';
import { MdAdd } from "react-icons/md";
import EditUser from './EditEmployee';
import UserModal from './EmployeeModal';
import './ViewEmployee.css';

// eslint-disable-next-line react/prop-types
const ViewUser = ({ onAddUserClick }) => {
    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editUser, setEditUser] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const fetchData = () => {
        const data = JSON.parse(localStorage.getItem('userData')) || [];
        setUserData(data);
        setFilteredData(data);
    };

    useEffect(() => {
        fetchData();

        const handleStorageChange = () => {
            fetchData();
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = userData.filter(user =>
                user.ID.toString().includes(searchTerm) // Convert ID to string and filter
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(userData);
        }
    }, [searchTerm, userData]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    const handleDelete = (userId) => {
        const updatedData = userData.filter(user => user.ID !== userId);
        const deletedUser = userData.find(user => user.ID === userId);
        localStorage.setItem('userData', JSON.stringify(updatedData));
        setUserData(updatedData);

        // Save deleted user to "deletedUsers" in localStorage
        const deletedUsers = JSON.parse(localStorage.getItem('deletedUsers')) || [];
        deletedUsers.push(deletedUser);
        localStorage.setItem('deletedUsers', JSON.stringify(deletedUsers));
    };

    const handleEdit = (user) => {
        setEditUser(user);
    };

    const handleSave = (updatedUser) => {
        const updatedData = userData.map(user =>
            user.ID === updatedUser.ID ? updatedUser : user
        );
        localStorage.setItem('userData', JSON.stringify(updatedData));
        setUserData(updatedData);
        setEditUser(null);
    };

    const handleCancel = () => {
        setEditUser(null);
    };

    const handleRowClick = (user) => {
        setSelectedUser(user);
    };

    const closeModal = () => {
        setSelectedUser(null);
    };

    return (
        <div className='flex'>
            <div className='functions'>
                <div className='searchBar'>
                    <input 
                        type="text" 
                        placeholder="Search by ID" 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                    />
                </div>
                <div className='Add'>
                    <button className='addBtn' onClick={onAddUserClick}><MdAdd /></button>
                </div>
            </div>
            <div className="table">
                <h1>Active Employees</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Names</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Position</th>
                        <th>ID</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user, index) => (
                            <tr key={index} onClick={() => handleRowClick(user)}>
                                <td><img src={user.imagePreview || "default-image.png"} alt="User" /></td>
                                <td>{user.names}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNo}</td>
                                <td>{user.position}</td>
                                <td>{user.ID}</td>
                                <td>
                                    <button className='editBtn' onClick={(e) => { e.stopPropagation(); handleEdit(user); }}>edit</button>
                                    <button className='deleteBtn' onClick={(e) => { e.stopPropagation(); handleDelete(user.ID); }}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editUser && <EditUser user={editUser} onSave={handleSave} onCancel={handleCancel} />}
            {selectedUser && <UserModal user={selectedUser} onClose={closeModal} />}
        </div>
    );
};

export default ViewUser;
