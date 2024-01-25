"use client";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <main className="text-sm flex ">
      <Sidebar isOpenState={isOpen} toggle={toggleSideBar}/>
      <Dashboard isOpenState={isOpen} toggle={toggleSideBar} />
    </main>
  );
}
