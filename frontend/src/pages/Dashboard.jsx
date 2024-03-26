import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

export const Dashboard = () => {
  const [user, setUser] = useState({});
  const [balance, setBalance] = useState({});
  const fetchUser = async () => {
    let result = await axios.get("http://localhost:3000/api/v1/user/", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setUser(result.data);

    result = await axios.get("http://localhost:3000/api/v1/account/balance", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setBalance(result.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Appbar user={user} />
      <div className="m-8">
        <Balance value={balance.balance} />
        <Users />
      </div>
    </div>
  );
};
