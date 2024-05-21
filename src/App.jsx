import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";

function App() {
  const [count, setCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState();

  return (
    <>
      <Header/>
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value)=> setSelectedIndex(value)}/>
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
        <div className="md:col-span-2 border h-screen shadow-md p-5 overflow-auto">
          {selectedIndex==0?
            <IconController/> :
            <BackgroundController/>
          }
        </div>
        <div className="md:col-span-3 bg-red-100">
          <LogoPreview/>
        </div>
        <div className="bg-blue-200">
          Ads Banner
        </