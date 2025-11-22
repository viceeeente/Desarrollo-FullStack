import React from "react";
import "../../assets/styles/Login.css"; 
import Nav from "../organisms/Nav";
import LoginForm from "../organisms/LoginForm";
import ExtraOptions from "../molecules/ExtraOptions";

export default function Login() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="body-form">
        <LoginForm />
        <ExtraOptions />
      </main>
    </>
  );
}
