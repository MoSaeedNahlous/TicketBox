import React, { useContext } from 'react'
import DeleteStadium from '../../layout/admin Forms/Stadiums/DeleteStadium'
import AdminNav from '../../layout/AdminNav'
import StadiumTable from '../../layout/admin Forms/Stadiums/StadiumTable'
import {StadiumGlobalContext} from '../../../contexts/stadiumContext/StadiumGlobalState'
import { useEffect } from 'react'


const DeleteStadiumPage = () => {
    


    return (
        <div>
            <AdminNav />
            <DeleteStadium/> 
        
            </div>
    )
}

export default DeleteStadiumPage