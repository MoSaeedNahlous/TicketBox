import React from 'react'
import newsimg from '../res/news.jpg'
import goal from '../res/goal.png'
import skysports from '../res/skysports.png'
import espn from '../res/espn.png'
const News = () => {
    return (
        <div>
            <br />
            <div style={{textAlign:'center', backgroundImage: `url(${newsimg})`,
    backgroundPosition: "50% 38%" , height:'70px',width:'100%',backgroundRepeat:'no-repeat',backgroundSize:'100% auto'}}>.</div>
            <br />
            <div className="row" style={{width:'100%'}}>
                <div className="col-sm-4">
                <div style={{ backgroundImage: `url(${goal})`,
    backgroundPosition: 'center' , height:'70px',width:'100%',backgroundSize:'170px 100px',backgroundRepeat:'no-repeat'}}></div>
                <iframe width="100%" height="700" src="https://rss.app/embed/v1/zkh8FPcf1VBWB51e" frameBorder="0"/>
                </div>
                <div className="col-sm-4">
                <div style={{ backgroundImage: `url(${skysports})`,
    backgroundPosition: 'center' , height:'70px',width:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
                <iframe width="100%" height="700" src="https://rss.app/embed/v1/GZvhYdyW6Dhx7tEh" frameBorder="0"/>
                </div>
                <div className="col-sm-4">
                <div style={{ backgroundImage: `url(${espn})`,
    backgroundPosition: 'center' , height:'70px',width:'100%',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}></div>
                <iframe width="100%" height="700" src="https://rss.app/embed/v1/xGtmdnseGz7boxTv" frameBorder="0"/>
                </div>
            </div>
            
<br/>
    </div>
    )
}

export default News
