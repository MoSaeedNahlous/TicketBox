import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import bm from '../../res/bm.png'
import city from '../../res/city.png'
import stad from '../../res/stad.png'

const CardPage = () => {
    return (
        <div>
            <NavBar />
        <div className="container">
            <br />
            <div className='row'>
                <div className="col-md-4" style={{width:'33%',height:'10%'}}>
                    <img src={bm} alt="team1" style={{width:'15rem',float:'right',borderRadius: '50%'}}/>
                    <h2 style={{float:'right'}}>Bayern Munchin</h2>
                </div>
                <div className="col-md-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <h1 style={{textAlign:'center',verticalAlign:'middle',fontSize:'8rem'}}>V.S</h1>
                    </div>
                <div className="col-md-4" style={{width:'33%',height:'10%'}}>
                <img src={city} alt="team2"   style={{width:'15rem',float:'left',borderRadius: '50%'}}/>
                    <h2 style={{float:'left'}}>Manchester City</h2>
                </div>
            </div>
            <br /
            >
            <div>
                <ul className="list-group col-md-6 offset-md-3" >
                    <li className='list-group-item'>Stadium:    Allianz Arena</li>
                    <li className='list-group-item'>Tournament: UEFA Champion Leauge</li>
                    <li className='list-group-item'>Date:   20/6/2020</li>
                </ul>
            </div>
            <hr/>
            <h1 style={{textAlign:'center'}}>Ticket Details</h1>
            <br />
            <div className="row">
                <div className="col-md-6" style={{display:'flex',justifyContent:'center'}}><img src={stad} alt="Stadium" /></div>
                <div className="col-md-6">
                <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
                </div>
            </div>
            <br />
        </div>
        <Footer />
        </div>
    )
}

export default CardPage
