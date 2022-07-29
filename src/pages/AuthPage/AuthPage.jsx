import LoginForm from "../../components/LogInForm";
import SignUpForm from "../../components/SignUpForm";
import { useState } from "react";
import { Button } from "react-bootstrap";
export default function AuthPage({ setUser }) {


  return (
    <main>
      <h1>AuthPage</h1>

      <SignUpForm setUser={setUser} />

      <LoginForm setUser={setUser} />
    </main>
  );
}
