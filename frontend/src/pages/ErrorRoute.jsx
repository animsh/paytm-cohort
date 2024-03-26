import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

export const ErrorRoute = () => {
  const navigate = useNavigate();
  const [to, setTo] = useState("");

  useEffect(() => {
    const to = localStorage.getItem("token") ? "/dashboard" : "/signup";
    setTo(to);
  }, []);
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-100 text-center h-max p-8">
          <Heading label={"404 Not Found"} />
          <SubHeading
            label={"The page you are looking for is not available for you."}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                navigate(to);
              }}
              label={`Navigate to ${to}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
