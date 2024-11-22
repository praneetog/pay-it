import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"
import { useEffect, useState } from "react"

export const Dashboard = () => {

  const [balance, setBalance] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("https://pay-it-ddww.onrender.com/api/v1/account/balance", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setBalance(response.data.balance); // Set the fetched balance
      } catch (error) {
        console.error("Error fetching balance:", error);
        setBalance("Error fetching balance"); // Handle error gracefully
      }
    };

    fetchBalance(); // Fetch balance when the component mounts
  }, [token]); // Re-run if the token changes

  return (
    <div>
        <Appbar firstLetter={"P"}/>
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
  )
}