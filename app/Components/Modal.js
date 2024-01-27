"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import jaydon from "../../public/Jaydon.png";
import marcus from "../../public/Marcus.png";
import corey from "../../public/corey.png";
import cooper from "../../public/cooper.png";
import philip from "../../public/philip.png";
import money from "../../public/money.png";
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
  {
    name: "David Herbet",
    date: "Nov 18,2023",
    amount: "$50,000",
    status: "Paid",
    image: marcus,
    id: 6,
  },
  {
    name: "Queendoline Akpan",
    date: "Nov 12, 2023",
    amount: "$110,000",
    status: "Refund",
    image: jaydon,
    id: 7,
  },
  {
    name: "Chioma Audrey",
    date: "Nov 16,2023",
    amount: "$66,000",
    status: "Paid",
    image: corey,
    id: 8,
  },
  {
    name: "Franklin Lawrence",
    date: "Nov 11,2023",
    amount: "$109,000",
    status: "Refund",
    image: cooper,
    id: 9,
  },
  {
    name: "Sandra Lubin",
    date: "Nov 19,2023",
    amount: "$99,000",
    status: "Paid",
    image: philip,
    id: 10,
  },
];

const variants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  closed: {
    opacity: 0,
    y: "25%",
    scale: 0.8,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Modal = ({ dataId, changeModalState, currentModalState }) => {
  const [currentState, setCurrentState] = useState({});

  useEffect(() => {
    let filteredData = lastOrders.filter((data) => data.id === dataId);
    setCurrentState(filteredData[0]);
  }, []);

  return (
    <section
      onClick={changeModalState}
      className={`fixed top-0 w-screen h-screen bg-black bg-opacity-50 `}
    >
      <div
        className={`bg-white text-black fold:w-9/12 mmtablets:w-2/5 mx-auto fold:mt-56 mmtablets:mt-36 p-10 rounded-md shadow-xl text-center `}
      >
        <div className="flex fold:flex-col mtablets:flex-row items-center justify-around">
          <Image src={money} alt="coins" width={200} height={200} priority placeholder="blur" className = "fold:w-2/4"></Image>
          <div>
            <Image
              src={currentState.image}
              alt={currentState.name}
              width={40}
              height={30}
              className="mx-auto"
            ></Image>
            <p className="fold:text-sm mmtablets:text-lg">{currentState.name} </p>
            <p className="fold:text-sm mmtablets:text-lg">
              {currentState.amount} {currentState.status}
            </p>
            <button
              onClick={changeModalState}
              className="bg-red-500 p-2 rounded-md text-white mt-3 hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
