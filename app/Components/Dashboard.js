import Header from "./Header";
import Chart from "./Charts";
import Orders from "./Orders";
import LastOrders from "./LastOrders";
import TopPlatform from "./TopPlatform";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
const Dashboard = ({isOpenState, toggle, openStateTimeline,timeLineOpen,toggleModal, changeModalStateClose}) => {
  return (
    <div className={`w-full ${isOpenState ? 'fold:ml-10 mobile:ml-14 mtablets:ml-16' : 'ml-0'} mtablets:ml-16`}>
      <PiDotsThreeOutlineVerticalFill size={20} className=" mtablets:hidden ml-2 mt-2" onClick={toggle}/>
      <Header />
      <div className="tablets:max-h-56 grid grid-cols-1 mmtablets:grid-cols-3 tablets:grid-cols-3 ">
        <Chart openStateTimeline={openStateTimeline} timeLineOpen ={timeLineOpen }/>
        <Orders />
      </div>
      <div className={`grid grid-cols-1 tablets:grid-cols-3 ${openStateTimeline ? 'tablets:mt-72' : 'tablets:mt-40 transition duration-700'}`}>
        <LastOrders toggleModal={toggleModal} changeModalStateClose={changeModalStateClose}/>
        <TopPlatform />
      </div>
    </div>
  );
};

export default Dashboard;
