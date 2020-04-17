import React from 'react'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import { useContext,useState } from 'react'
import { useEffect } from 'react'




const AddStadium = () => {
  useEffect(() => {
    context.ClearError()
  }, [])
  



  



  const context = useContext(StadiumGlobalContext)
  const [stadium, setStadium] = useState({'name':'','city':'','capacity':'','image':''})


  const addStadium =(e)=>{
    e.preventDefault();
    if(/^[a-zA-Z]+$/.test(stadium.name))
      {
    console.log(stadium);
    context.AddStadium(stadium);
    setStadium({'name':'','city':'','capacity':'','image':''})
    document.getElementById('imgg').value=""
    document.getElementById('img').setAttribute('src',"")
      }
      else
      {
       
      alert('Please input alphabet characters only in name!!!');
      
      }
    
  }
  const onChangeHandler = (e) =>{setStadium({...stadium,[e.target.name]:e.target.value})}
  
  const inputHandler =(txt,e)=>{
     e.preventDefault();
      

  }




  const fileSelectedHandler = (e) =>{


    var fileName = document.getElementById("imgg").value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png" ||extFile=="gif"){

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
      
  
    
   var img = document.getElementById('img')
   img.crossOrigin='Anonymous'
   img.onload=function(){
     var canvas = document.createElement('canvas')
     var ctx = canvas.getContext('2d')
           canvas.height=this.naturalHeight
            canvas.width=this.naturalWidth
     ctx.drawImage(this,0,0);
     var data=canvas.toDataURL('image/jpeg')
     console.log(data);
     
     
     setStadium({...stadium,'image':data})
   }
    }else{
        alert("Only jpg/jpeg , png and gif files are allowed!");
        document.getElementById('imgg').value=null
        document.getElementById('img').setAttribute('src', '');
    }
      
  }
  
  

    return (
        <div className='container'>
        <form onSubmit={addStadium}>
      <h1>Add Stadium</h1>
    <div className="form-group">
      <label>Stadium Name</label>
      <input id='txt' type="text" className="form-control" name='name' placeholder="Stadium Name" value={stadium.name} onChange={onChangeHandler} required/>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.name}</strong>
          </div>
    </div>
    <div className="form-group">
      <label >City</label>
      <select required className="form-control" value={stadium.city} name='city' onChange={onChangeHandler} >
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
            <strong style={{color:'red'}}> {context.error.city}</strong>
          </div>
    </div>
    <div className="form-group">
      <label>Capacity</label>
      <input type='number' className="form-control"value={stadium.capacity} name='capacity' placeholder="capacity" onChange={onChangeHandler} required/>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.capacity}</strong>
          </div>
    </div>
  
  <div className="form-group">
    <label>Stadium Image file</label>
    <br/ >
    <img id='img' src="" alt="" width='400px' height='250px'/>
    <br/>
    <input type="file" className="form-control-file" accept=".png, .jpg, .jpeg, .gif" id='imgg' onChange={fileSelectedHandler} />
    <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.image}</strong>
          </div>
  </div>
  
  <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.message}</strong>
          </div>

  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Add Stadium</button>
</form>
        </div>
    )
    }
    export default AddStadium





