import "./Login.css";
import React, { useState } from "react";
import InputWithLabel from "./input-with-label/InputWithLabel";
import { login } from "../../services/api.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((r) => console.log(r)) // Hmmm... maybe we should do something with this information?
      .catch((e) => setError(e.response.data.message));
  };

  return (
    <div className="Login">
      {error && <p>There was an error: {error}</p>}
      <form onSubmit={onSubmit}>
        <InputWithLabel
          value={email}
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <InputWithLabel
          value={password}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
