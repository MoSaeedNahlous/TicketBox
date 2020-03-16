import React,{useState,useEffect, Fragment} from 'react'
import DeleteUser from '../../layout/admin Forms/Users/DeleteUser'
import axios from 'axios'

import UsersTable from '../../layout/admin Forms/Users/UsersTable'
import AdminNav from '../../layout/AdminNav'

const DeleteUserPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        
         axios.get('/users/findAll').then((res)=>{
        setUsers(res.data)
        console.log(res.data)
    }
    
  )
  .catch((error)=>{console.log(error)}
    
  );
        
    }, [])
   
    const handleRefresh =(e) =>{
        e.preventDefault();
        axios.get('/users/findAll').then((res)=>{
            setUsers(res.data)
            console.log(res.data)
        }
        
      )
      .catch((error)=>{console.log(error)}
        
      );

    }






    return (
        <div>
          <AdminNav />
        <DeleteUser />
        <br />
       <UsersTable users={users} />
       <button onClick={handleRefresh} style={{display:'block',
    marginLeft: 'auto',marginRight: 'auto' }}><i className="fa fa-refresh fa-2x" aria-hidden="true"
       ></i></button>
       
        </div>
    )
}

export default DeleteUserPage
