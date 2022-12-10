import Lists from "./Lists";
import Add from './Add';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Main(){

    return(
        <Router> 
            <div className="main">
                    
                
                <Routes>
                    <Route path="/" element={<Lists />} />
                    <Route path="/add" element={<Add />} />
                </Routes>
                </div>
        </Router>
    )
}