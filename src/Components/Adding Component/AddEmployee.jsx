import './AddEmployee.css';
import { useState, useEffect } from 'react';

const generateRandomID = () => {
    return Math.floor(Math.random() * 1000);
};

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
    const [errors, setErrors] = useState({});

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
                    const maxWidth = 500;
                    const scaleSize = maxWidth / img.width;
                    canvas.width = maxWidth;
                    canvas.height = img.height * scaleSize;

                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const resizedImage = canvas.toDataURL('image/jpeg', 0.7);

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

    const validateForm = () => {
        let formErrors = {};
        if (!formData.names) formErrors.names = 'Name is required***';
        if (!formData.email) {
            formErrors.email = 'Email is required***';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid***';
        }
        if (!formData.phoneNo) {
            formErrors.phoneNo = 'Phone number is required***';
        } else if (formData.phoneNo.length !== 10) {
            formErrors.phoneNo = 'Phone number must be 10 digits***';
        }
        if (!formData.position) formErrors.position = 'Position is required***';
        return formErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const newID = generateRandomID();

        const newUserData = {
            ...formData,
            ID: newID,
            imagePreview: imagePreview
        };

        const existingData = JSON.parse(localStorage.getItem('userData')) || [];
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
                onBack(); 
            }, 3000); 

            return () => clearTimeout(timer);
        }
    }, [showPopup, onBack]);

    useEffect(() => {
        const randomID = generateRandomID();
        setFormData(prevFormData => ({ ...prevFormData, ID: randomID }));
    }, []);

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
                    {errors.names && <p className='error'>{errors.names}</p>}
                    <div className='inputContainer'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={handleInputChange} />
                        
                    </div>
                    {errors.email && <p className='error'>{errors.email}</p>}
                    <div className='inputContainer'>
                        <label htmlFor="phoneNo">Phone No.</label>
                        <input type="tel" id="phoneNo" value={formData.phoneNo} onChange={handleInputChange} />
                        
                    </div>
                    {errors.phoneNo && <p className='error'>{errors.phoneNo}</p>}
                    <div className='inputContainer'>
                        <label htmlFor="ID">ID</label>
                        <input type="text" id="ID" value={`0${formData.ID}`} onChange={handleInputChange} disabled/>
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="position">Position</label>
                        <input type="text" id="position" value={formData.position} onChange={handleInputChange} />
                        
                    </div>
                    {errors.position && <p className='error'>{errors.position}</p>}
                    <div className='previous'>
                        <div className="imagePreview">
                            {imagePreview && <img src={imagePreview} alt="Preview" />}
                        </div>
                        <label htmlFor="image" className="uploadLabel">Upload Image</label>
                        <input type="file" id="image" onChange={handleImageChange} required/>
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
