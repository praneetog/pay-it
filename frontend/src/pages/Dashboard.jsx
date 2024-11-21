import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
  return (
    <div>
        <Appbar firstLetter={"P"}/>
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
  )
}