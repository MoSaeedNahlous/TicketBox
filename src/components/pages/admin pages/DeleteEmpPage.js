import React,{useEffect,useState} from 'react'
import axios from 'axios'
import DeleteEmp from '../../layout/admin Forms/Emps/DeleteEmp'
import AdminNav from '../../layout/AdminNav'
import EmpTable from '../../layout/admin Forms/Emps/EmpTable'

const DeleteEmpPage = () => {
    const [emps, setEmps] = useState([])

    useEffect(() => {
        
         axios.get('/employee/findAll').then((res)=>{
        setEmps(res.data)
        console.log(res.data)
    }
    
  )
  .catch((error)=>{console.log(error)}
    
  );
        
    }, [])
   
    const handleRefresh =(e) =>{
        e.preventDefault();
        axios.get('/employee/findAll').then((res)=>{
            setEmps(res.data)
            console.log(res.data)
        }
        
      )
      .catch((error)=>{console.log(error)}
        
      );

    }

    return (
        <div>
            <AdminNav />
            <DeleteEmp />
        <br />
       <EmpTable emps={emps} />
       <button onClick={handleRefresh} style={{display:'block',
    marginLeft: 'auto',marginRight: 'auto' }}><i className="fa fa-refresh fa-2x" aria-hidden="true"
       ></i></button>
            
        </div>
    )
}

export default DeleteEmpPage
