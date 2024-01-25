import Header from "./Header";
import Chart from "./Charts";
import Orders from "./Orders";
import LastOrders from "./LastOrders";
import TopPlatform from "./TopPlatform";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
const Dashboard = ({isOpenState, toggle}) => {
  return (
    <div className={`w-full ${isOpenState ? 'fold:ml-10 mobile:ml-14 mtablets:ml-16' : 'ml-0'} mtablets:ml-16`}>
      <PiDotsThreeOutlineLight size={20} className=" mtablets:hidden ml-2" onClick={toggle}/>
      <Header />
      <div className="  tablets:max-h-56 grid grid-cols-1 tablets:grid-cols-3 ">
        <Chart />
        <Orders />
      </div>
      <div className="grid grid-cols-1 tablets:grid-cols-3 tablets:mt-40">
        <LastOrders />
        <TopPlatform />
      </div>
    </div>
  );
};

export default Dashboard;
