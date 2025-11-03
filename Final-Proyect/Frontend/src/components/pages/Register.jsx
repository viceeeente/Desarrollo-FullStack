import React from "react";
import RegisterForm from "../molecules/RegisterForm";
import "../../assets/styles/Register.css";
import Nav from "../organisms/Nav";

export default function RegisterPage() {
  return (
    <>
      <Nav/>
      <main id="body-form">
        <RegisterForm />
      </main>
    </>
  );
}
