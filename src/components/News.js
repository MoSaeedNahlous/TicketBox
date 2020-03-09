import React from 'react'

const News = () => {
    return (
        <div>
            <br />
            <h1 style={{textAlign:'center'}}>News</h1>
            <br />
            <div className="row">
                <div className="col-sm-4">
                <h1 style={{textAlign:'center'}}>Goal.com News</h1>
                <iframe width="100%" height="700" src="https://rss.app/embed/v1/zkh8FPcf1VBWB51e" frameBorder="0"/>
                </div>
                <div className="col-sm-4">
                <h1 style={{textAlign:'center'}}>SkySports News</h1>
                <iframe width="100%" height="700" src="https://rss.app/embed/v1/GZvhYdyW6Dhx7tEh" frameBorder="0"/>
                </div>
                <div className="col-sm-4">
                <h1 style={{textAlign:'center'}}>ESPN News</h1>
                <iframe width="600" height="700" src="https://rss.app/embed/v1/xGtmdnseGz7boxTv" frameBorder="0"/>
                </div>
            </div>
            
<br/>
    </div>
    )
}

export default News
