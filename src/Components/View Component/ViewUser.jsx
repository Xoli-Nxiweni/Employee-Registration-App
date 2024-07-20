// import { useEffect, useState } from 'react';
// import { BiBorderBottom } from 'react-icons/bi';
// import { BsSearch } from "react-icons/bs";
// import { MdAdd } from "react-icons/md";
// import './ViewUser.css';

// const ViewUser = () => {
//     const [userData, setUserData] = useState([]);

//     const fetchData = () => {
//         const data = JSON.parse(localStorage.getItem('userData')) || [];
//         setUserData(data);
//     };

//     useEffect(() => {
//         // Initial fetch
//         fetchData();

//         // Set up event listener for storage changes
//         const handleStorageChange = () => {
//             fetchData();
//         };

//         window.addEventListener('storage', handleStorageChange);

//         // Clean up event listener
//         return () => {
//             window.removeEventListener('storage', handleStorageChange);
//         };
//     }, []);

//     return (
//         <div className='flex'>
//             <div className='functions'>
//                 <div className='searchBar'>
//                     <input type="text" /> <button className='searchBtn'><BsSearch /></button>
//                 </div>
//                 <div className='Add'>
//                     <button className='addBtn'><MdAdd/></button>
//                 </div>
//             </div>
//             <div className="table">
//                 <h1>Active Employees</h1>
//                 <table>
//                     <thead>
//                         <tr>
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
//                         {userData.map((user, index) => (
//                             <tr key={index}>
//                                 <td><img src={user.imagePreview || "default-image.png"} alt="User" /></td>
//                                 <td>{user.names}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.phoneNo}</td>
//                                 <td>{user.position}</td>
//                                 <td>{user.ID}</td>
//                                 <td>
//                                     <button className='editBtn'>edit</button> 
//                                     <button className='deleteBtn'>delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default ViewUser;

// import { useEffect, useState } from 'react';
// import { BiBorderBottom } from 'react-icons/bi';
// import { BsSearch } from "react-icons/bs";
// import { MdAdd } from "react-icons/md";
// import './ViewUser.css';

// const ViewUser = ({ onAddUserClick }) => {
//     const [userData, setUserData] = useState([]);

//     const fetchData = () => {
//         const data = JSON.parse(localStorage.getItem('userData')) || [];
//         setUserData(data);
//     };

//     useEffect(() => {
//         // Initial fetch
//         fetchData();

//         // Set up event listener for storage changes
//         const handleStorageChange = () => {
//             fetchData();
//         };

//         window.addEventListener('storage', handleStorageChange);

//         // Clean up event listener
//         return () => {
//             window.removeEventListener('storage', handleStorageChange);
//         };
//     }, []);

//     return (
//         <div className='flex'>
//             <div className='functions'>
//                 <div className='searchBar'>
//                     <input type="text" /> <button className='searchBtn'><BsSearch /></button>
//                 </div>
//                 <div className='Add'>
//                     <button className='addBtn' onClick={onAddUserClick}><MdAdd/></button>
//                 </div>
//             </div>
//             <div className="table">
//                 <h1>Active Employees</h1>
//                 <table>
//                     <thead>
//                         <tr>
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
//                         {userData.map((user, index) => (
//                             <tr key={index}>
//                                 <td><img src={user.imagePreview || "default-image.png"} alt="User" /></td>
//                                 <td>{user.names}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.phoneNo}</td>
//                                 <td>{user.position}</td>
//                                 <td>{user.ID}</td>
//                                 <td>
//                                     <button className='editBtn'>edit</button> 
//                                     <button className='deleteBtn'>delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default ViewUser;


// import { useEffect, useState } from 'react';
// import { BsSearch } from "react-icons/bs";
// import { MdAdd } from "react-icons/md";
// import './ViewUser.css';

// const ViewUser = ({ onAddUserClick }) => {
//     const [userData, setUserData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     // Function to fetch user data
//     const fetchData = () => {
//         const data = JSON.parse(localStorage.getItem('userData')) || [];
//         setUserData(data);
//         setFilteredData(data); // Initially, show all data
//     };

//     // Effect to fetch data initially and set up storage event listener
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



//     // Effect to filter data based on search term
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
//         // Check if the value is a valid number (including empty string)
//         if (/^\d*$/.test(value)) {
//             setSearchTerm(value);
//         }
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
//                     {/* <button className='searchBtn'><BsSearch /></button> */}
//                 </div>
//                 <div className='Add'>
//                     <button className='addBtn' onClick={onAddUserClick}><MdAdd/></button>
//                 </div>
//             </div>
//             <div className="table">
//                 <h1>Active Employees</h1>
//                 <table>
//                     <thead>
//                         <tr>
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
//                                 <td>{user.ID}</td>
//                                 <td>
//                                     <button className='editBtn'>edit</button> 
//                                     <button className='deleteBtn'>delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default ViewUser;


// import { useEffect, useState } from 'react';
// import { BsSearch } from "react-icons/bs";
// import { MdAdd } from "react-icons/md";
// import './ViewUser.css';

// const ViewUser = ({ onAddUserClick }) => {
//     const [userData, setUserData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [editUser, setEditUser] = useState(null);

//     // Function to fetch user data
//     const fetchData = () => {
//         const data = JSON.parse(localStorage.getItem('userData')) || [];
//         setUserData(data);
//         setFilteredData(data); // Initially, show all data
//     };

//     // Effect to fetch data initially and set up storage event listener
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

//     // Effect to filter data based on search term
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
//         // Check if the value is a valid number (including empty string)
//         if (/^\d*$/.test(value)) {
//             setSearchTerm(value);
//         }
//     };

//     // Handle Edit Button Click
//     const handleEdit = (user) => {
//         {onAddUserClick}
//         setEditUser(user);
//         // Example: Open an edit modal
//         console.log('Edit user:', user);
//     };

//     // Handle Delete Button Click
//     const handleDelete = (id) => {
//         const updatedData = userData.filter(user => user.ID !== id);
//         localStorage.setItem('userData', JSON.stringify(updatedData));
//         setUserData(updatedData);
//         setFilteredData(updatedData);
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
//                     <button className='searchBtn'><BsSearch /></button>
//                 </div>
//                 <div className='Add'>
//                     <button className='addBtn' onClick={onAddUserClick}><MdAdd/></button>
//                 </div>
//             </div>
//             <div className="table">
//                 <h1>Active Employees</h1>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Names</th>
//                             <th>Email</th>
//                             <th>Phone No.</th>
//                             <th>Position</th>
//                             <th>ID</th>
//                             <th>Actions</th>
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
//                                 <td>{user.ID}</td>
//                                 <td>
//                                     <button 
//                                         className='editBtn' 
//                                         onClick={() => handleEdit(user)}
//                                     >
//                                         Edit
//                                     </button>
//                                     <button 
//                                         className='deleteBtn' 
//                                         onClick={() => handleDelete(user.ID)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default ViewUser;


// import { useEffect, useState } from 'react';
// import { BsSearch } from "react-icons/bs";
// import { MdAdd } from "react-icons/md";
// import './ViewUser.css';
// import EditUser from './EditUser'; // Import the EditUser component

// const ViewUser = ({ onAddUserClick }) => {
//     const [userData, setUserData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [editUser, setEditUser] = useState(null);

//     // Fetch user data
//     const fetchData = () => {
//         const data = JSON.parse(localStorage.getItem('userData')) || [];
//         setUserData(data);
//         setFilteredData(data); // Initially, show all data
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

//     const handleEdit = (user) => {
//         setEditUser(user);
//     };

//     const handleSaveEdit = (updatedUser) => {
//         const updatedData = userData.map(user =>
//             user.ID === updatedUser.ID ? updatedUser : user
//         );
//         localStorage.setItem('userData', JSON.stringify(updatedData));
//         setUserData(updatedData);
//         setFilteredData(updatedData);
//         setEditUser(null);
//     };

//     const handleCancelEdit = () => {
//         setEditUser(null);
//     };

//     const handleDelete = (id) => {
//         const updatedData = userData.filter(user => user.ID !== id);
//         localStorage.setItem('userData', JSON.stringify(updatedData));
//         setUserData(updatedData);
//         setFilteredData(updatedData);
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
//                     <button className='addBtn' onClick={onAddUserClick}><MdAdd/></button>
//                 </div>
//             </div>
//             <div className="table">
//                 <h1>Active Employees</h1>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Names</th>
//                             <th>Email</th>
//                             <th>Phone No.</th>
//                             <th>Position</th>
//                             <th>ID</th>
//                             <th>Actions</th>
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
//                                 <td>{user.ID}</td>
//                                 <td>
//                                     <button 
//                                         className='editBtn' 
//                                         onClick={() => handleEdit(user)}
//                                     >
//                                         Edit
//                                     </button>
//                                     <button 
//                                         className='deleteBtn' 
//                                         onClick={() => handleDelete(user.ID)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             {editUser && (
//                 <EditUser 
//                     user={editUser} 
//                     onSave={handleSaveEdit} 
//                     onCancel={handleCancelEdit} 
//                 />
//             )}
//         </div>
//     );
// }

// export default ViewUser;

import { useEffect, useState } from 'react';
import { MdAdd } from "react-icons/md";
import EditUser from './EditUser'; // Import EditUser component
import './ViewUser.css';

// eslint-disable-next-line react/prop-types
const ViewUser = ({ onAddUserClick }) => {
    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editUser, setEditUser] = useState(null);

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
                user.ID.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(userData);
        }
    }, [searchTerm, userData]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setSearchTerm(value);
        }
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user, index) => (
                            <tr key={index}>
                                <td><img src={user.imagePreview || "default-image.png"} alt="User" /></td>
                                <td>{user.names}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNo}</td>
                                <td>{user.position}</td>
                                <td>{user.ID}</td>
                                <td>
                                    <button className='editBtn' onClick={() => handleEdit(user)}>edit</button>
                                    <button className='deleteBtn' onClick={() => handleDelete(user.ID)}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editUser && <EditUser user={editUser} onSave={handleSave} onCancel={handleCancel} />}
        </div>
    );
};

export default ViewUser;
