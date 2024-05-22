import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorage";

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [updateStorage, setUpdateStorage] = useState({});
    const [downloadIcon, setDownloadIcon] = useState(null);

    return (
        <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
            <div>
                <Header DonwloadIcon={setDownloadIcon} />
                <div className="w-64 fixed">
                    <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
                </div>
                <div className="ml-64 grid grid-cols-1 md:grid-cols-6 ">
                    <div className="md:col-span-2 border h-screen shadow-md p-5 overflow-auto">
                        {selectedIndex === 0 ?
                            <IconController /> :
                            <BackgroundController />
                        }
                    </div>
                    <div className="md:col-span-3">
                        <LogoPreview downloadIcon={downloadIcon} />
                    </div>
                    <div className="md:col-span-1 shadow-md">
                        <img src="./profile.png" alt="banner"  />
                    </div>
                </div>
            </div>
        </UpdateStorageContext.Provider>
    );
}

export default App;
