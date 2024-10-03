import { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css'; // Import the same CSS file

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/login', formData);
            console.log('Login successful:', response.data);
            // Here you can store the token or user details as needed
        } catch (error) {
            console.error('Login failed:', error.response.data);
            // Handle the error (e.g., show an error message)
        }
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}> {/* Use the same class here */}
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;