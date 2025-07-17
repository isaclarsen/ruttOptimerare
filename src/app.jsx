import {createRoot} from "react-dom/client"
import { Header } from "./components/Header";
import { AddressForm } from "./components/AddressForm";
import { ScheduleForm } from "./components/ScheduleForm";
import { RouteResult } from "./components/RouteResult";
import { useState } from "react";

function App(){
    const [url, setUrl] = useState(""); 
    
    return(
        <div className="bg-[#1C1C1C] min-h-screen">
            <Header/>
            <AddressForm setUrl={setUrl}/>
            {url
            ? <RouteResult url={url}/>
            : <></>
            }
        </div>
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)