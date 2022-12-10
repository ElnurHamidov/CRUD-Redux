import {Link, useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import { useDispatch, useSelector } from 'react-redux';

export default function Edit(){

    const navigate = useNavigate();
    const obj = useSelector( store=>store.edit );

    const validate = values=>{
        const errors={};

        if(!values.name){
            errors.name="required";
        }else if(values.name.length<2 || values.name.length>10){
            errors.name="should be 3-10 symbols"
        }

        if(!values.surname){
            errors.surname="required";
        }else if(values.surname.length<2){
            errors.surname="should be at least 3 symbols";
        }

        if(!values.age){
            errors.age="required";
        }else if(values.age.length>3){
            errors.age="should be 1-3 symbols"
        }

        return errors;
    }

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: obj.name,
            surname: obj.surname,
            age : obj.age,
        },
        validate,
        onSubmit: values=>{
            const el = values;
            el.id = obj.id;
            dispatch({type: 'edit', payload: el});
            navigate('/');
        }
    });

    return(
        <div className="add">
            <nav className="navbar">
            <p className="navbar-title">Edit</p>
            <Link to="/" ><button className="btn btn-success" type="button" style={{width : '100%' }}>Back</button></Link> 
        </nav>
        <div className="form">
            <form name='form' onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        { formik.touched.name && formik.errors.name &&  <small className="form-text" style={{color: 'red'}}>{formik.errors.name}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input type="text" className="form-control" id="surname" placeholder="Enter surname" name="surname" value={formik.values.surname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.surname && formik.errors.surname && <small className="form-text" style={{color: 'red'}}>{formik.errors.surname}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" className="form-control" id="age" placeholder="Enter age" name="age" value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.age && formik.errors.age && <small className="form-text" style={{color: 'red'}}>{formik.errors.age}</small>}
                    </div>
                         <button type="submit"  className="btn btn-warning">Edit</button>
                </form>
            </div>
        </div>
    );
}