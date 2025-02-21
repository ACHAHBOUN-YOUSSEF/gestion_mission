import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";
export default function Login (){
  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card card p-4 shadow">
        <img src={"/logo.jpeg"} alt="Login Banner" className="w-100 mb-3" />
        <h3 className="text-center mb-4">Connexion</h3>
        <form>
          <div className="mb-3 input-group">
            <span className="input-group-text"><FaUser /></span>
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="mb-3 input-group">
            <span className="input-group-text"><FaLock /></span>
            <input type="password" className="form-control" placeholder="Mot de passe" required />
          </div>
          <button type="submit" className="btn btn-danger w-100">Se connecter</button>
        </form>
      </div>
    </div>
  );
};
