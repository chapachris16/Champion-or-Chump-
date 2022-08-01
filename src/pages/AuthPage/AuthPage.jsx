import LoginForm from "../../components/LogInForm";
import SignUpForm from "../../components/SignUpForm";
import './AuthPage.css'
import { useState } from "react";
import { Button } from "react-bootstrap";
export default function AuthPage({ setUser }) {


  return (
    <main>
      <h1 className="authPageHeader">Welcome to The Social Corner</h1>
      <h3>Not a Member? Sign Up!</h3>
      <SignUpForm setUser={setUser} />
      <h3 className="logIn">Log In</h3>
      <LoginForm setUser={setUser} />
    </main>
  );
}
