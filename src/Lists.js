import { useSelector } from 'react-redux';
import Header from './Header';
import List from './List';
import {useDispatch} from 'react-redux';

export default function Lists(){

    const dispatch = useDispatch();
    const state = useSelector(state=> state.list);
    if(state.length !== 0 ){
    return(
        <>
            <Header />
            <div className="lists">
            <table className="table" style={{color: '#fff', background: 'rgba(0, 0, 0, .5)'}}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Age</th>
                    <th score="col">Edit</th>
                    <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((e, i) => <List key={i} value={e} index={i+1} /> )}
                    <tr>
                        <td colSpan="6">
                            <button className='btn btn-all' style={{background: 'red'}} onClick={ ()=>{
                                const confirm = window.confirm('Remove all items?');
                                if(confirm) dispatch({type: 'all'}); 
                            } } >Remove all</button>  
                        </td>
                    </tr>
                </tbody>
            </table>
        
            </div>
        </>

    );
    }
    else{
        return(
        <>
            <Header />
            <div className="lists">
                <h2>Your list is empty</h2>
            </div>
        </>
        );
    }
}