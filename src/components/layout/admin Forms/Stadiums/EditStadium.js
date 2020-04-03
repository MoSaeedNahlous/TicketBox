import React from 'react'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import { useContext,useState } from 'react'
import { useEffect } from 'react'
import StadiumTableRow from './StadiumTableRow'

const EditStadium = () => {
    

  const context = useContext(StadiumGlobalContext)
  

  const [stadium, setStadium] = useState({'stadiumId':'','name':'','city':'','capacity':'',imgBlob:''})
  var dis='none'

    useEffect(() => {
        context.GetStadiums();
        if(context.current !== null){
          setStadium(context.current)
          
        }else{
          setStadium({'stadiumId':'','name':'','city':'','capacity':'',imgBlob:''})
        }
    }, [context,context.current])

  

  const UpdateStadium = (e)=>{
    console.log(context.current)
    e.preventDefault();
    context.UpdateStadiumById(context.current)
  
    context.GetStadiums();

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
   
   context.current.imgBlob= data
 }
}

    return (
        <div style={{backgroundColor:'#F1F1F1'}}>
        <div className='container' >
          <br/>
        <form onSubmit={UpdateStadium}>
  <h1>Edit Stadium</h1>
  <div className="form-group">
    <label>Stadium Id</label>
    <input type="text" className="form-control" placeholder="Stadium Id" id='in' disabled defaultValue={stadium.stadiumId} onChange={e => context.current.stadiumId=e.target.value} required/>
    <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.message}</strong>
          </div>
  </div>
  <div className="form-group">
      <label>Stadium Name</label>
      <input type="text" className="form-control" placeholder="Stadium Name"id='in1' defaultValue={stadium.name} onChange={e => context.current.name = e.target.value} required/>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.name}</strong>
          </div>
    </div>
    <div className="form-group">
      <label >City</label>
      <select required className="form-control"id='in2' value={stadium.city} onChange={e =>context.current.city = e.target.value} >
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
      <input type="number" className="form-control"id='in3'  placeholder="capacity" defaultValue={stadium.capacity} onChange={e => context.current.capacity = e.target.value} required/>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.capacity}</strong>
          </div>
    </div>
  
  <div className="form-group">
    <label>Stadium Image file</label>
    <br/ >
    <img id='img' src="" alt="" width='400px' height='250px'/>
    <br/>
    <input type="file" className="form-control-file" id="in4" defaultValue={stadium.imgBlob} onChange={fileSelectedHandler} />
    <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.image}</strong>
          </div>
  </div>
  
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox"  required/>
      <label className="form-check-label">
        Are you Sure?
      </label>
    </div>
  </div>
  <div className="form-group">
  <button onClick={()=>context.ClearCurrent()}  className="btn btn-danger" style={{float:'right',display:dis}}>Clear</button>
  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Update</button>
  </div>
</form>
        </div>
        <h1 style={{color:'#F1F1F1'}}>.</h1>

        <div className='container'>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Capacity</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {context.stadiums.map((Stadium) =><StadiumTableRow key={Stadium.stadiumId} Stadium={Stadium} />)}
  </tbody>
</table>
        </div>
        <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.message}</strong>
          </div>
        <button onClick={(e)=>{e.preventDefault();context.GetStadiums();}} style={{display:'block',
    marginLeft: 'auto',marginRight: 'auto' }}><i className="fa fa-refresh fa-2x" aria-hidden="true"
       ></i></button>
        
        
       </div>
    )
}

export default EditStadium
