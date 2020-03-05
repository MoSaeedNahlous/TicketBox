import React from 'react'
import Card from './Card'
import '../../App.css'

const Cards = () => {
    
    return (
        <div className="container"  >
        <br />
            <h1 style={{textAlign:'center'}}>Featured Games</h1>
            <br />
            <div className="row">
                <div className=" col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item" style={{backgroundColor:'blue',color:'white'}}>Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item"><button className='btn btn-primary'> BTN</button></li>
                    </ul>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item" style={{backgroundColor:'blue',color:'white'}}>Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item"><button className='btn btn-primary'> BTN </button></li>
                    </ul>
                </div>
            
                <div className="Mycards col-md-8" >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div  style={{display:'flex',justifyContent:'center'}}>
                        
                        
                    </div>
                    </div>
                    
                    
                    <div className="row col-md-6 offset-md-5" style={{float:'right'}}>
                        <button style={{color:'black',margin:'auto'}}><i className="fas fa-arrow-left f-2x"  /></button>
                        <button style={{color:'black',margin:'auto'}}><i className="fas fa-arrow-right"  /></button>
                        </div>
                
            </div>
            <br />
                
                
            
        </div>
    )
}

export default Cards

