import {Link} from 'react-router-dom';

export default function Header(){

    return(
        <nav className="navbar fixed-top">
            <p className="navbar-title">CRUD-Redux</p>
            <Link to="/add"><button className="btn btn-success" type="submit" style={{width: '100%', textAlign: 'center'}}>Add</button></Link> 
        </nav>
    );
}