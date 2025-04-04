import React from "react";
import { Link } from "react-router";

export default function Login() {
  return (
    <form>
    <label>Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label>Password</label>
      <input type="password" placeholder="Password" id="password" />

      <button>Log In</button>
      <Link className="social" to="/register">Register</Link>
    </form>
  );
}
