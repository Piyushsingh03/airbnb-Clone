/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();

    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration successfull, Now you can login");
    } catch (e) {
      alert("Registration failed, Please try again later");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-center text-4xl mb-4">Register Now</h1>
        <form action="" className="max-w-md mx-auto " onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <input
            type="email"
            placeholder="Your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="underline decoration-sky-600 text-blue-600"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
