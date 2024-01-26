import jaydon from "../../public/Jaydon.png";
import marcus from "../../public/Marcus.png";
import corey from "../../public/corey.png";
import cooper from "../../public/cooper.png";
import philip from "../../public/philip.png";
import Image from "next/image";
import viewIcon from "../../public/viewIcon.png";
import { motion } from "framer-motion";
import Modal from './Modal'
const lastOrders = [
  {
    name: "Marcus Bergson",
    date: "Nov 15,2023",
    amount: "$80,000",
    status: "Paid",
    image: marcus,
    id: 1,
  },
  {
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
    image: jaydon,
    id: 2,
  },
  {
    name: "Corey Schieifer",
    date: "Nov 14,2023",
    amount: "$87,000",
    status: "Paid",
    image: corey,
    id: 3,
  },
  {
    name: "Cooper Press",
    date: "Nov 14,2023",
    amount: "$100,000",
    status: "Refund",
    image: cooper,
    id: 4,
  },
  {
    name: "Philip Lubin",
    date: "Nov 13,2023",
    amount: "$78,000",
    status: "Paid",
    image: philip,
    id: 5,
  },
];
const LastOrders = ({toggleModal,changeModalStateClose}) => {

  const modalFunc = (id)=>{
    toggleModal(id)
    changeModalStateClose()
  }
  return (
    <section className="col-span-2 mx-3 bg-white rounded-md dark:bg-coolors-gray fold:p-1 mobile:p-2 mtablets:p-5">
      <div className="flex justify-between items-center w-11/12">
        <p className="fold:text-xs mobile:text-base mtablets:text-lg font-semibold">Last Orders</p>
        <p className="text-paid-green fold:text-xs mobile:text-base mtablets:text-lg font-semibold cursor-pointer">See All</p>
      </div>
      <div className="overflow-x-auto fold:text-xxs mobile:text-xxss mtablets:text-base">
        <div className="grid grid-cols-6 text-gray-text-3 fold:text-xxs mobile:text-xxss mtablets:text-base border-b dark:border-gray-700 py-3">
          <div>Name</div>
          <div></div>
          <div>Date</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Invoice</div>
        </div>
        {lastOrders.map((lastOrder) => (
          
          <div
            key={lastOrder.id}
            className="grid grid-cols-6 my-3 py-2 items-center border-b dark:border-gray-700"
          >
            <div className="flex items-center gap-3 col-span-2">
              <Image
                src={lastOrder.image}
                alt={lastOrder.name}
                width={40}
                height={30}
                className="fold:w-1/4 mtablets:w-auto"
              ></Image>
              <p className="mobile:w-7/12 mtablets:w-auto">{lastOrder.name}</p>
            </div>

            <p className="text-gray-text-3 mobile:w-9/12 mtablets:w-auto">{lastOrder.date}</p>
            <p>{lastOrder.amount}</p>
            <p
              className={`${
                lastOrder.status === "Paid"
                  ? "text-paid-green"
                  : "text-paid-red"
              }`}
            >
              {lastOrder.status}
            </p>
            <motion.div 
            whileHover={{ scale: 1.2}}
            transition={{
              duration: 0.125,
            }}
            onClick={()=>modalFunc(lastOrder.id)}
            className="flex justify-around items-center w-6/12 cursor-pointer">
              <Image src={viewIcon} alt="view" width={20} height={30} className="fold:w-2/4 mtablets:w-auto"></Image>
              <p>View</p>
            </motion.div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default LastOrders;
