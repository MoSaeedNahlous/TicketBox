import React from 'react'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import { useContext,useState } from 'react'
import axios from 'axios'



const AddStadium = () => {

  let newStad={'name':'','city':'','capacity':'',imgBlob:''}

  const context = useContext(StadiumGlobalContext)


  const addStadium =(e)=>{
    e.preventDefault();
    context.AddStadium(newStad);
  }


  const fileSelectedHandler = (e) =>{


    
      var url = e.target.value;
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (e.target.files && e.target.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
          var reader = new FileReader();
  
          reader.onload = function (e) {
              document.getElementById('img').setAttribute('src', e.target.result);
          }
  
          reader.readAsDataURL(e.target.files[0]);
      }else{
           document.getElementById('img').setAttribute('src', '/assets/no_preview.png');
      }
  
    
   var img =document.getElementById('img')
   img.crossOrigin='Anonymous'
   img.onload =()=>{
     var canvas = document.createElement('canvas')
     var ctx = canvas.getContext('2d')
     canvas.height=1
     canvas.width= 1
     //ctx.drawImage(this,0,0);
     var data=canvas.toDataURL('image/jpeg')
     
     newStad.imgBlob= data
   }
  }
  

    return (
        <div className='container'>
        <form onSubmit={addStadium}>
      <h1>Add Stadium</h1>
    <div className="form-group">
      <label>Stadium Name</label>
      <input type="text" className="form-control" placeholder="Stadium Name" onChange={e => newStad.name = e.target.value} required/>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.name}</strong>
          </div>
    </div>
    <div className="form-group">
      <label >City</label>
      <select required className="form-control" onChange={e =>newStad.city = e.target.value} >
      <option value="" hidden> 
          Select City 
      </option> 
        <option value='Damascus'>Damascus</option>
        <option value='Aleppo'>Aleppo</option>
        <option value='Lattakia'>Lattakia</option>
        <option value='Homs'>Homs</option>
        <option value='Tartous'>Tartous</option>
        <option value='Daraa'>Daraa</option>
        <option value='Der-El-Zour'>Der El-Zour</option>
        <option value='FAl-Rakka'>Al-Rakka</option>
        <option value='Al-Hasakeh'>Al-Hasakeh</option>
        <option value='Al-Swedaa'>Al-Swedaa</option>
        <option value='Idlib'>Idlib</option>
        <option value='Al-Kuneterah'>Al-Kuneterah</option>
      </select>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.city}</strong>
          </div>
    </div>
    <div className="form-group">
      <label>Capacity</label>
      <input type="number" className="form-control"  placeholder="capacity" onChange={e => newStad.capacity = e.target.value} required/>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.capacity}</strong>
          </div>
    </div>
  
  <div className="form-group">
    <label>Stadium Image file</label>
    <br/ >
    <img id='img' src="" alt="" width='400px' height='250px'/>
    <br/>
    <input type="file" className="form-control-file" onChange={fileSelectedHandler} />
    <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.image}</strong>
          </div>
  </div>

  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Add Stadium</button>
</form>
        </div>
    )
}



export default AddStadium
