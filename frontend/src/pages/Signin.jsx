import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signin = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-100 text-center h-max p-8">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            type="email"
            placeholder="animsh@gmail.com"
            label={"Email"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <InputBox
            type="password"
            placeholder="123456"
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button
              label={"Sign in"}
              onClick={async () => {
                if (!username || !password) {
                  alert("Please enter valid information.");
                  return;
                }
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/login",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("username", username);
                setIsAuthenticated(true);
                navigate("/dashboard");
              }}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
