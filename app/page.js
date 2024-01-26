"use client";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import { useState} from "react";
import Modal from "./Components/Modal";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTimeline, setIsOpenTimeline] = useState(false)
  const [modalOpen, setModalOpen] = useState(0)
  const [modalState, setModalState] = useState(false)
  const toggleSideBar = ()=>{
    setIsOpen((prev)=>!prev)
  }
  const toggleTimeLine = () => {
    setIsOpenTimeline((prev) => !prev);
  };

  const openModal = (id)=>{
    setModalOpen(id)
  }

  const changeModalState = ()=>{
    setModalState(false)
  }
  const changeModalStateClose = ()=>{
    setModalState(true)
  }
   return (
    <main className="text-sm flex ">
      <Sidebar isOpenState={isOpen} toggle={toggleSideBar}/>
      <Dashboard isOpenState={isOpen} toggle={toggleSideBar} openStateTimeline = {isOpenTimeline} timeLineOpen={toggleTimeLine} toggleModal = {openModal} changeModalStateClose={changeModalStateClose}/>
      {modalState && <Modal dataId = {modalOpen} changeModalState ={changeModalState}/>}
    </main>
  );
}
