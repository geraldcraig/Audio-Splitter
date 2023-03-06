import {Outlet, NavLink} from "react-router-dom";
import '../App.css';
import Header from './Header';
import Footer from './Footer';


const Layout = () => {
    // const style = ({isActive}) => ({
    //     fontWeight: isActive ? 'bold' : 'normal',
    // });

    return (
        <>
            <div id="container">
                <Header/>
                <table className="table">
                    <thead>
                    <tr>
                        <th><NavLink to="/home">Home</NavLink></th>
                        <th><NavLink to="/player">Wave Player</NavLink></th>
                        <th><NavLink to="/model">Model Training</NavLink></th>
                    </tr>
                    </thead>
                </table>
            </div>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;