// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../utilities/users-service';
import {Form, Button} from 'react-bootstrap'
export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    // <div>
    //   <div className="form-container" onSubmit={handleSubmit}>
    //     <form autoComplete="off" >
    //       <label>Email</label>
    //       <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
    //       <label>Password</label>
    //       <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
    //       <button type="submit">LOG IN</button>
    //     </form>
    //   </div>
    //   <p className="error-message">&nbsp;{error}</p>
    // </div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={credentials.email} placeholder="Enter email" onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={credentials.password}placeholder="Password" onChange={handleChange} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}