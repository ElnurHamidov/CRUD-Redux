import Lists from "./Lists";
import Add from './Add';
import {Routes, Route} from 'react-router-dom';
import Edit from "./Edit";

export default function Main(){

    return(
            <div className="main">
                    
                
                <Routes>
                    <Route path="/" element={<Lists />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/edit" element={<Edit />} />         
                </Routes>
                </div>
    )
}