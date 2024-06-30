import {Route, Routes} from "react-router-dom";
import Homepage from './Home/homepage'
import TshirtPage from "./Tshirts/Tshirt";
import Pagenotfound from "../components/404/404";
import Productoverview from "../components/Productoverview/Productoverview";
import Itemform from "../components/Itemform/Itemform";
import Itemdetails from "../components/Itemdetails/Itemdetails";
import Itemeditform from "../components/ItemeditForm/Itemedit";

export default function DefaultRoute() {
    return (
        <Routes>
            <Route path={'/'} element={<Homepage/>}/>
            {/*    products preview     */}
            {/*<Route path={'/preview'} element={<ProductView/>}/>*/}
            <Route path={'/tshirts'} element={<TshirtPage/>}/>
            <Route path={'/home'} element={<Homepage/>}/>
            <Route path={'/overview'} element={<Productoverview/>}/>
            <Route path={'/itemform'} element={<Itemform/>}/>
            <Route path={'/itemdetails'} element={<Itemdetails/>}/>
            <Route path={'/itemedit'} element={<Itemeditform/>}/>
            <Route path={'/*'} element={<Pagenotfound/>}/>

        </Routes>
    );
}
