import Header from "./Header";
import Chart from "./Charts";
import Orders from "./Orders";
import LastOrders from "./LastOrders";
import TopPlatform from "./TopPlatform";
import logo from "../../public/logo.png";
import Image from "next/image";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
const Dashboard = ({
  isOpenState,
  toggle,
  openStateTimeline,
  timeLineOpen,
  toggleModal,
  changeModalStateClose,
}) => {
  return (
    <div className={`w-full ml-0 mtablets:ml-16`}>
      <div className={`mmtablets:hidden fixed w-full dark:bg-coolors-gray bg-white flex justify-between px-2 py-2 items-center`}>
        <PiDotsThreeOutlineVerticalFill
          size={20}
          className=" mtablets:hidden ml-2 mt-2 border border-gray-600 dark:border-white rounded-full p-1 "
          onClick={toggle}
        />
        <div className="flex justify-center items-center my-1 mtablets:hidden">
          <Image src={logo} alt="logo" width={30} height={20}></Image>
        </div>
      </div>
      <div className="fold:mt-14 mtablets:mt-0 py-3">
      <Header />
      <div className="tablets:max-h-56 grid grid-cols-1 mmtablets:grid-cols-1 tablets:grid-cols-3 ">
        <Chart
          openStateTimeline={openStateTimeline}
          timeLineOpen={timeLineOpen}
        />
        <Orders />
      </div>
      <div
        className={`grid grid-cols-1 tablets:grid-cols-3 ${
          openStateTimeline
            ? "tablets:mt-72"
            : "tablets:mt-40 transition duration-700"
        }`}
      >
        <LastOrders
          toggleModal={toggleModal}
          changeModalStateClose={changeModalStateClose}
        />
        <TopPlatform />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
