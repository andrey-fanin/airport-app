import React from "react";
import { useInput } from "../hook/input";
import { useAppDispatch } from "../hook/redux";
import { login, register } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const username = useInput("");
  const password = useInput("");
  const navigate = useNavigate();

  const loginHandler = () => {
    if (isFormValid()) {
      try {
        dispatch(login({ username: username.value, password: password.value }));
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Invalid form");
    }
  };

  const dispatch = useAppDispatch();

  const isFormValid = () => username.value && password.value;

  const submitHandler = (event: React.FormEvent) => {
    try {
      event.preventDefault();
      if (isFormValid()) {
        dispatch(
          register({ username: username.value, password: password.value })
        ).then(() => {
          navigate("/");
        });
      } else {
        alert("Invalid form");
      }
    } catch (e) {}
  };
  return (
    <form
      className="container mx-auto max-w-[500px] pt-8"
      onSubmit={submitHandler}
    >
      <div className="">
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          type="text"
          {...username}
          id="username"
          className="border py-1 px-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="username" className="block">
          Password
        </label>
        <input
          type="password"
          {...password}
          id="password"
          className="border py-1 px-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="py-2 px-4 bg-blue-700 text-white font-bold mr-2"
      >
        Register
      </button>
      <button
        type="button"
        className="py-2 px-4 bg-green-700 text-white font-bold"
        onClick={loginHandler}
      >
        Login
      </button>
    </form>
  );
};

export default AuthPage;
