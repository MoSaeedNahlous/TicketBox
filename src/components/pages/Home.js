import React, { Component,useState } from "react";
import ImageSlider from "../layout/ImageSlider";
import Cards from "../../components/card/Cards";
import Navbar from "../layout/NavBar";
import NavImg from "../../res/download.png";
import Footer from "../layout/Footer";
import Specs from "../layout/Specs";
import ScrollButton from "../layout/ScrollButton";
import Pagination from '../layout/Pagination';
import Tables from "../layout/Tables";
const Home = () =>  {
  
  const [cards, setCards] = useState([
    {"id":1,"team1":"Barcelona","team2":"RealMadrid","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":2,"team1":"BVB","team2":"RealMadrid","startDate":"3/3/2013","endDate":"2/2/2014","tour":"UCL","stad":"Alianz"},
{"id":3,"team1":"Syria","team2":"RealMadrid","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":4,"team1":"Bayern","team2":"RealMadrid","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":5,"team1":"United","team2":"RealMadrid","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":6,"team1":"City","team2":"Liver","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":7,"team1":"Spurs","team2":"RealMadrid","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":8,"team1":"Barcelona","team2":"WestHam","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":9,"team1":"Syria","team2":"RealMadrid","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":10,"team1":"BVB","team2":"RealMadrid","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":11,"team1":"Barcelona","team2":"RealMadrid","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"},
{"id":12,"team1":"IRAQ","team2":"Westbro","startDate":"1/1/2013","endDate":"2/2/2013","tour":"UCL","stad":"Alianz"}])
const [currentPage, setcurrentPage] = useState(1)
const [cardsPerPage, setcardsPerPage] = useState(9)

const indexOfLastCard = currentPage * cardsPerPage
const indexOfFirstCard = indexOfLastCard - cardsPerPage
const currentCards = cards.slice(indexOfFirstCard,indexOfLastCard)



//change page
const paginateFun = (pageNumber) => {setcurrentPage(pageNumber)

  window.scrollTo(0, 100);



}


    return (
      <div>
        <Navbar bg={NavImg} />
        <ImageSlider scrollStepInPx="1" delayInMs="16.66" />
        <Specs />
        
        <ScrollButton />
        
            
          <h1 style={{textAlign:'center'}}>Featured Games</h1>
          <div className="row" style={{width:'100%'}}>
          
            
            
            <div className="col-md-4 container"><Tables/></div>
            <div className="col-md-7 container"><Cards cards={currentCards} />
            <div style={{paddingLeft:'10%'}}>
            <Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginateFun}/>
            </div>
            </div>
          </div>


          
        
        
        
        
        <Footer bg={NavImg} />
      </div>
    );
  
}
export default Home;
