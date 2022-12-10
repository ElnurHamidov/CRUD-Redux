import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function List(props){

    const dispatch = useDispatch();

    return(
            <tr>
                <th scope="row">{props.index}</th>
                <td>{props.value.name}</td>
                <td>{props.value.surname}</td>
                <td>{props.value.age}</td>
                <td><button type="btn btn-warning" style={{background: 'yellow', borderRadius: '5px'}}><AiFillEdit/> </button></td>
                <td><button type="btn btn-error" style={{background: 'red', borderRadius: '5px'}}><AiFillDelete onClick = {() =>{
                    const confirm = window.confirm('Delete item?');
                    if(confirm) dispatch({type: 'delete' , payload: props.value.id});
                    } } /></button></td>
            </tr>
    );
}