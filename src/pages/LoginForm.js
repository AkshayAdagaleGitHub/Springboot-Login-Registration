import { hot }  from 'react-hot-loader';
import React, { useState } from "react";
// import "./App.css";
import FormInputs from "./FormInputs";
import './loginform.css'
import Joi from "joi-browser";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
      submitSuccessfully: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.validateOnChange = this.validateOnChange.bind(this);
  }

  schema = Joi.object().keys({
    username: Joi.string()
      .label("Username")
      .required(),
    password: Joi.string()
      .required()
      .label("Password")
  });

  validate() {
    const result = Joi.validate(
      { username: this.state.username, password: this.state.password },
      this.schema,
      { abortEarly: false }
    );

    if (result.error === null) return;

    const errors = {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  }

  handleSubmit(e) {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });

    if (errors) return;

    console.log(errors);

    console.log("Form Submitted.");

    this.setState({ submitSuccessfully: true });
  }

  validateOnChange(currentTarget) {
    const obj = { [currentTarget.name]: currentTarget.value };

    const res = this.schema._inner.children.filter(
      item => item.key === currentTarget.name
    );

    console.log(this.schema[currentTarget.name]);

    const schema = { [currentTarget.name]: res[0].schema };

    const { error } = Joi.validate({ obj }, schema);

    return error ? error.details[0].message : null;
  }

  handleInputChange({ currentTarget }) {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateOnChange(currentTarget);

    if (errorMessage) errors[currentTarget.name] = errorMessage;
    else delete errors[currentTarget.name];

    this.setState({ [currentTarget.name]: currentTarget.value, errors });
  }
  render() {
    return (
		  <div className="form">
          <div className="form-body">
      <form onSubmit={this.handleSubmit}>
        {this.state.submitSuccessfully && (
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Form has been submitted!</h4>
            <p>
              You have successfully submitted the form. You will be redirected
              shortly.
            </p>
            <hr />
            <p class="mb-0">
              You will be loggedin as *username* and other users will see this
              name.
            </p>
          </div>
        )}
        <br/>
        <FormInputs
          onChange={this.handleInputChange}
          errors={this.state.errors}
          value={this.state.username}
          htmlForId="username"
          type="text"
          label="Username"
        />
        <br/>
        <FormInputs
          onChange={this.handleInputChange}
          errors={this.state.errors}
          value={this.state.password}
          htmlForId="password"
          type="password"
          label="Password"
        />
        <br/>
        <button disabled={this.validate()} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
    </div>
    );
  }
}


// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }

export default hot(module)(LoginForm);
