import {createRoot} from "react-dom/client"
import { Header } from "./components/Header";
import { AddressForm } from "./components/AddressForm";

function App(){
    return(
        <div className="bg-[#1C1C1C] min-h-screen">
            <Header/>
            <AddressForm/>
        </div>
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)