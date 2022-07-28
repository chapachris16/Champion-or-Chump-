import { Component } from "react"
import {signUp} from "../utilities/users-service.js"
import {Form, Button, Row, Col} from "react-bootstrap"
export default class SignUpForm extends Component{
    state = {
        name: "",
        email: "",
        password: "",
        ign: "",
        confirm: "",
        error: ""
        }
    
    // The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
        });
    };

    handleSubmit =  async (evt) => {
        evt.preventDefault()
        try {
            const formData = {...this.state}
            delete formData.error;
              // The promise returned by the signUp service method 
              // will resolve to the user object included in the
              // payload of the JSON Web Token (JWT)
            delete formData.confirm
            const user = await signUp(formData)
            this.props.setUser(user)
        } catch {
            this.setState({error: 'Sign Up Failed - Try Again'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            // <div>
            // <div className="form-container">
            //     <form autoComplete="off" onSubmit={this.handleSubmit}>
            //     <label>Name</label>
            //     <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            //     <label>Email</label>
            //     <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            //     <label>Summoner Name</label>
            //     <input type="ign" name="ign" value={this.state.ign} onChange={this.handleChange} required />
            //     <label>Password</label>
            //     <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            //     <label>Confirm</label>
            //     <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            //     <button type="submit" disabled={disable}>SIGN UP</button>
            //     </form>
            // </div>
            // <p className="error-message">&nbsp;{this.state.error}</p>
            // </div>
            <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>
      </Row>
        <Row>
        <Form.Group as={Col} className="mb-3" controlId="formGridPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control placeholder="Re-enter your password" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formGridPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control placeholder="Re-enter your password" />
        </Form.Group>
        </Row>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Summoner Name</Form.Label>
        <Form.Control placeholder="Enter Your League Name" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            );
        }
}
