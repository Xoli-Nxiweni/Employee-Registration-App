// import './AddUser.css'
// import { useState } from 'react';
// let AddUser = () =>{

//     const [imagePreview, setImagePreview] = useState(null);

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImagePreview(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };
//     return(
//         <div className="AddUserContainer">
//             <div className='myForm'>
//                 <form action="Post">
//                     <div className='inputContainer'>
//                     <label htmlFor="names" >Names</label>
//                     <input type="text" id="names" />
//                     </div>
//                     <div className='inputContainer'>
//                     <label htmlFor="email" >Email</label>
//                     <input type="email" id="email" />
//                     </div>
//                     <div className='inputContainer'>
//                     <label htmlFor="phoneNo" >Phone No.</label>
//                     <input type="tel" id="phoneNo" />
//                     </div>
//                     <div className='inputContainer'>
//                     <label htmlFor="ID" >ID</label>
//                     <input type="tel" id="ID" />
//                     </div>
//                     <div className='inputContainer'>
//                     <label htmlFor="position" >Position</label>
//                     <input type="text" id="position" />
//                     </div>
//                     <div className='previous'>
//                     <div className="imagePreview">
//                             {imagePreview && <img src={imagePreview} alt="Preview" />}
//                         </div>
//                         <label htmlFor="image" className="uploadLabel">Upload Image</label>
//                     <input type="file" id="image" onChange={handleImageChange} />
//                     </div>
//                 </form>
//                 <div className="addingBtn">
//                 <button>ADD +</button>
//             </div>
//             </div>
            
//         </div>
//     )
// }

// export default AddUser;

// import './AddUser.css'
// import { useState, useEffect } from 'react';

// const AddUser = () => {
//     const [imagePreview, setImagePreview] = useState(null);
//     const [formData, setFormData] = useState({
//         names: '',
//         email: '',
//         phoneNo: '',
//         ID: '',
//         position: ''
//     });
//     const [showPopup, setShowPopup] = useState(false);

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImagePreview(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleInputChange = (event) => {
//         const { id, value } = event.target;
//         setFormData({ ...formData, [id]: value });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const newUserData = {
//             ...formData,
//             imagePreview: imagePreview
//         };

//         // Retrieve existing data from localStorage
//         const existingData = JSON.parse(localStorage.getItem('userData')) || [];
        
//         // Append new data to existing data
//         const updatedData = [...existingData, newUserData];
        
//         // Save updated data back to localStorage
//         localStorage.setItem('userData', JSON.stringify(updatedData));
        
//         // Show popup
//         setShowPopup(true);

//         // Clear the form fields and image preview after saving
//         setFormData({
//             names: '',
//             email: '',
//             phoneNo: '',
//             ID: '',
//             position: ''
//         });
//         setImagePreview(null);
//     };

//     useEffect(() => {
//         if (showPopup) {
//             const timer = setTimeout(() => {
//                 setShowPopup(false);
//             }, 3000); // Close after 5 seconds

//             return () => clearTimeout(timer);
//         }
//     }, [showPopup]);

//     return (
//         <div className="AddUserContainer">
//             {showPopup && (
//                 <div className="popup">
//                     <div className="popup-inner">
//                         User has been added!
//                     </div>
//                 </div>
//             )}
//             <div className='myForm'>
//                 <form onSubmit={handleSubmit}>
//                     <div className='inputContainer'>
//                         <label htmlFor="names">Names</label>
//                         <input type="text" id="names" value={formData.names} onChange={handleInputChange} />
//                     </div>
//                     <div className='inputContainer'>
//                         <label htmlFor="email">Email</label>
//                         <input type="email" id="email" value={formData.email} onChange={handleInputChange} />
//                     </div>
//                     <div className='inputContainer'>
//                         <label htmlFor="phoneNo">Phone No.</label>
//                         <input type="tel" id="phoneNo" value={formData.phoneNo} onChange={handleInputChange} />
//                     </div>
//                     <div className='inputContainer'>
//                         <label htmlFor="ID">ID</label>
//                         <input type="tel" id="ID" value={formData.ID} onChange={handleInputChange} />
//                     </div>
//                     <div className='inputContainer'>
//                         <label htmlFor="position">Position</label>
//                         <input type="text" id="position" value={formData.position} onChange={handleInputChange} />
//                     </div>
//                     <div className='previous'>
//                         <div className="imagePreview">
//                             {imagePreview && <img src={imagePreview} alt="Preview" />}
//                         </div>
//                         <label htmlFor="image" className="uploadLabel">Upload Image</label>
//                         <input type="file" id="image" onChange={handleImageChange} />
//                     </div>
//                     <div className="addingBtn">
//                         <button type="submit">ADD +</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default AddUser;

// import './AddUser.css';
// import { useState, useEffect } from 'react';

// const AddUser = ({ onBack }) => {
//     const [imagePreview, setImagePreview] = useState(null);
//     const [formData, setFormData] = useState({
//         names: '',
//         email: '',
//         phoneNo: '',
//         ID: '',
//         position: ''
//     });
//     const [showPopup, setShowPopup] = useState(false);

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImagePreview(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleInputChange = (event) => {
//         const { id, value } = event.target;
//         setFormData({ ...formData, [id]: value });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const newUserData = {
//             ...formData,
//             imagePreview: imagePreview
//         };

//         // Retrieve existing data from localStorage
//         const existingData = JSON.parse(localStorage.getItem('userData')) || [];
        
//         // Append new data to existing data
//         const updatedData = [...existingData, newUserData];
        
//         // Save updated data back to localStorage
//         localStorage.setItem('userData', JSON.stringify(updatedData));
        
//         // Show popup
//         setShowPopup(true);

//         // Clear the form fields and image preview after saving
//         setFormData({
//             names: '',
//             email: '',
//             phoneNo: '',
//             ID: '',
//             position: ''
//         });
//         setImagePreview(null);
//     };

//     useEffect(() => {
//         if (showPopup) {
//             const timer = setTimeout(() => {
//                 setShowPopup(false);
//                 onBack(); // Call onBack after hiding the popup
//             }, 3000); // Close after 3 seconds

//             return () => clearTimeout(timer);
//         }
//     }, [showPopup, onBack]);

//     return (
//         <div className="AddUserContainer">
//             {showPopup && (
//                 <div className="popup">
//                     <div className="popup-inner">
//                         User has been added!
//                     </div>
//                 </div>
//             )}
//             <div className='myForm'>
//                 <form onSubmit={handleSubmit}>
//                     <div className='inputContainer'>
//                         <label htmlFor="names">Names</label>
//                         <input type="text" id="names" value={formData.names} onChange={handleInputChange} />
//                     </div>
//                     <div className='inputContainer'>
//                         <label htmlFor="email">Email</label>
//                         <input type="email" id="email" value={formData.email} onChange={handleInputChange} />
//                     </div>
//                     <div className='inputContainer'>
//                         <label htmlFor="phoneNo">Phone No.</label>
//                         <input type="tel" id="phoneNo" value={formData.phoneNo} onChange={handleInputChange} />
//                     </div>
//                     <div className='inputContainer'>
//                         <label htmlFor="ID">ID</label>
//                         <input type="tel" id="ID" value={formData.ID} onChange={handleInputChange} />
//                     </div>
//                     <div className='inputContainer'>
//                         <label htmlFor="position">Position</label>
//                         <input type="text" id="position" value={formData.position} onChange={handleInputChange} />
//                     </div>
//                     <div className='previous'>
//                         <div className="imagePreview">
//                             {imagePreview && <img src={imagePreview} alt="Preview" />}
//                         </div>
//                         <label htmlFor="image" className="uploadLabel">Upload Image</label>
//                         <input type="file" id="image" onChange={handleImageChange} />
//                     </div>
//                     <div className="addingBtn">
//                         <button type="submit">ADD +</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddUser;

import './AddUser.css';
import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const AddUser = ({ onBack }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        names: '',
        email: '',
        phoneNo: '',
        ID: '',
        position: ''
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const img = new Image();
                img.src = reader.result;

                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const maxWidth = 500; // Maximum width for resizing
                    const scaleSize = maxWidth / img.width;
                    canvas.width = maxWidth;
                    canvas.height = img.height * scaleSize;

                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const resizedImage = canvas.toDataURL('image/jpeg', 0.7); // Adjust quality if needed

                    setImagePreview(resizedImage);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUserData = {
            ...formData,
            imagePreview: imagePreview // Use resized image data
        };

        // Retrieve existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem('userData')) || [];
        
        // Append new data to existing data
        const updatedData = [...existingData, newUserData];
        
        try {
            localStorage.setItem('userData', JSON.stringify(updatedData));
            setShowPopup(true);
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                alert('Storage limit exceeded. Consider removing old data.');
            } else {
                throw e;
            }
        }

        // Clear the form fields and image preview after saving
        setFormData({
            names: '',
            email: '',
            phoneNo: '',
            ID: '',
            position: ''
        });
        setImagePreview(null);
    };

    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
                onBack(); // Call onBack after hiding the popup
            }, 3000); // Close after 3 seconds

            return () => clearTimeout(timer);
        }
    }, [showPopup, onBack]);

    return (
        <div className="AddUserContainer">
            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        User has been added!
                    </div>
                </div>
            )}
            <div className='myForm'>
                <form onSubmit={handleSubmit}>
                    <div className='inputContainer'>
                        <label htmlFor="names">Names</label>
                        <input type="text" id="names" value={formData.names} onChange={handleInputChange} />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="phoneNo">Phone No.</label>
                        <input type="tel" id="phoneNo" value={formData.phoneNo} onChange={handleInputChange} />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="ID">ID</label>
                        <input type="tel" id="ID" value={formData.ID} onChange={handleInputChange} />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="position">Position</label>
                        <input type="text" id="position" value={formData.position} onChange={handleInputChange} />
                    </div>
                    <div className='previous'>
                        <div className="imagePreview">
                            {imagePreview && <img src={imagePreview} alt="Preview" />}
                        </div>
                        <label htmlFor="image" className="uploadLabel">Upload Image</label>
                        <input type="file" id="image" onChange={handleImageChange} />
                    </div>
                    <div className="addingBtn">
                        <button type="submit">ADD +</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
