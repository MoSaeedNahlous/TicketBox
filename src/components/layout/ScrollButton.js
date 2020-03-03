import React from 'react'

const ScrollButton = () => {

    const scrollToTop=()=> {
      
      window.scrollTo(0, 0);
    }

        return (<button title='Back to top' className='scroll' 
                 onClick={ () => {scrollToTop(); }}>
                 <i className="fas fa-arrow-up fa-2x"/>
                  <span />
                </button>)
     
 } 
 export default ScrollButton
