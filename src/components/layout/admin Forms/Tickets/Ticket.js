import React, { Fragment } from 'react'
import bg from '../../../../res/ticketbg.jpg'
import qr from '../../../../res/download.png'

const Ticket = () => {
    const print =() =>{
        window.print();
    }
    return (
        <Fragment>
        <div className="container" style={{borderStyle:"solid",borderColor:'black',borderWidth:'5px',backgroundImage: `url(${bg})`
        ,backgroundSize:'cover',width:'1000px',height:'700px',color:'white',textAlign:'center'}}>
        <br />
        <h1 style={{margin:'20px'}}>Champions Leauge</h1>
            <h1 style={{margin:'20px'}}>BVB vs PSG</h1>
            <h2 style={{margin:'20px'}}>Allianz Arena</h2>
            <h3 style={{margin:'20px'}}>20/6/2020</h3>
            <img src={qr} alt="qr code" style={{margin:'30px'}}/>
            <h6 style={{margin:'20px'}}>Tid:123456789</h6>
            <h6 style={{margin:'20px'}}>created by:Runtime Terror for IT services</h6>
        </div>
        <button className="btn btn-primary"  onClick={print}>Print</button>
        </Fragment>
    )
}

export default Ticket
