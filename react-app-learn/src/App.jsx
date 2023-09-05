import { useState } from "react";
import InputForm from "./components/Elements/Inputs/InputForm";
import Button from "./components/Elements/Button/Button";

function App() {
  return (
    <div className="flex justify-center bg-slate-100 min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl mb-2 font-bold">Login</h1>
        <p className="font-medium text-slate-500">
          Welcome, please enter your detail
        </p>
        <form action="">
          <InputForm
            name="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
          ></InputForm>

          <InputForm
            name="password"
            label="Password"
            type="password"
            placeholder="********"
          ></InputForm>

          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
