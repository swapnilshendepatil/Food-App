import { useContext, useState } from 'react';
import './Login.css'
import { userContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const values = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('first Name',values.name)
        console.log('Last Name',values.lastName)
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form" style={{width:'350px'}}>
                <div className="form-group" >
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="text"
                        value={values.name}
                        onChange={(e) => values.setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        value={values.lastname}
                        onChange={(e) => values.setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Link to='/'><button type="submit" className="submit-button" >Login</button></Link>
            </form>
        </div>
    )
}

export default LoginForm