import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
// import Player from "./pages/Player";
// import Train from "./pages/Train";
// import Error from "./pages/Error";
// import Footer from "./pages/Footer";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home/>}/>
                    {/* <Route path="/player" element={<Player/>}/> */}
                    {/* <Route path="/train" element={<Train/>}/> */}
                    {/* <Route path="/*" element={<Error/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
