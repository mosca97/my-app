import React, { useState } from "react";
import { IUserModel } from "../IUserModel";
import { addNewUser, isUserIsAlreadyRegitered } from "../Storage/LocalStorage";
import { Link } from "react-router";

export default function Register() {
  const [data, setData] = useState<IUserModel>({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let id = e.target.id;
    let value = e.target.value;

    setData({ ...data, [id]: value });
    setMessage("");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      data.firstName == "" ||
      data.lastName == "" ||
      data.userName == "" ||
      data.password == ""
    ) {
      setMessage("Please fill the form");
      return;
    }
    setMessage("");

    if (isUserIsAlreadyRegitered(data.userName)){
        setMessage("Username already registered.");
        return;
    }

    addNewUser(data);
    setData({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
      })

      setMessage("Created. Go to login");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          value={data.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          value={data.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="userName"
          value={data.userName}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
        />

        <button>Register</button>
        <p className="social">{message}</p>
        <Link className="social" to="/login">Login</Link>
      </form>
    </>
  );
}
