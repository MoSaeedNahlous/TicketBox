import React,{ useContext,useState,useEffect } from 'react'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import StadiumTable from './StadiumTable'

const EditStadium = () => {

  const context = useContext(StadiumGlobalContext)
  const {error,UpdateStadiumById,GetStadiums,current} = context
  const [stad, setStad] = useState({'stadiumId':'','name':'','city':'','capacity':'','image':''})
  useEffect(() => {
    if(current!==null){
      setStad(current)
    }else{
      setStad({'stadiumId':'','name':'','city':'','capacity':'','image':''})
    }
  }, [current])
  
  
  
  
  
  

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
   setStad({...stad,'image':data})
 }
}
 const onSubmitHandler = e =>{
   e.preventDefault();
   UpdateStadiumById(stad)
   setStad({'stadiumId':'','name':'','city':'','capacity':'','image':''})
   GetStadiums()
 }
 
 const onChangeHandler = e =>{setStad({...stad,[e.target.name]:e.target.value})}







  
  return(
    <div className='container'>
      
      <form onSubmit={onSubmitHandler}>
        <h1>Edit Stadium</h1>
        <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.message}</strong>
          </div>
        <div className="form-group">
      <label>Stadium ID</label>
      <input type="number" className="form-control" required name='stadiumId' placeholder="Stadium ID" value={stad.stadiumId} onChange={onChangeHandler} disabled />
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.stadiumId}</strong>
          </div>
    </div>
    <div className="form-group">
      <label>Stadium Name</label>
      <input type="text" className="form-control" required name='name' onChange={onChangeHandler} value={stad.name} placeholder="Stadium Name"/>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.name}</strong>
          </div>
    </div>
    <div className="form-group">
      <label>Stadium Capacity</label>
      <input type="number" className="form-control" required name='capacity' onChange={onChangeHandler} value={stad.capacity} placeholder="Stadium Capacity" />
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.capacity}</strong>
          </div>
    </div>
    <div className="form-group">
      <label>Stadium City</label>
      <select className="form-control" onChange={onChangeHandler} value={stad.city} name='city' required >
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
        <option value='Al-Rakka'>Al-Rakka</option>
        <option value='Al-Hasakeh'>Al-Hasakeh</option>
        <option value='Al-Swedaa'>Al-Swedaa</option>
        <option value='Idlib'>Idlib</option>
        <option value='Al-Kuneterah'>Al-Kuneterah</option>
      </select>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.city}</strong>
          </div>
    </div>
    <div className="form-group">
    <label>Stadium Image file</label>
    <br/ >
    <img id='img' src="" alt="" width='400px' height='250px'/>
    <br/>
    <input type="file" onChange={fileSelectedHandler} className="form-control-file" id='imgg'  />
    <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.image}</strong>
          </div>
  </div>

  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Update Stadium</button>
  <br />
</form>

<br />
<StadiumTable />








    </div>)

  
  }
 
    



export default EditStadium
