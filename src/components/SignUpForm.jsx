import { Component } from "react";
import { signUp } from "../utilities/users-service.js";
import { Form, Button, Row, Col } from "react-bootstrap";
export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    ign: "",
    confirm: "",
    error: "",
  };

  

  // The object passed to setState is merged with the current state object
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

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
      // // </div>
      <Form onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="formGridConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              placeholder="Re-enter your password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formSummonerName">
            <Form.Label>Summoner Name</Form.Label>
            <Form.Control placeholder="Enter Your League Name" name='ign' value={this.state.ign} onChange={this.handleChange}/>
          </Form.Group>
        </Row>

        <p className="error-message">&nbsp;{this.state.error}</p>

        <Button variant="primary" type="submit" disabled={disable}>
          Submit
        </Button>
      </Form>
    );
  }
}
