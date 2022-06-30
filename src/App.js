import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar'
import NewsContent from './components/newsContent/NewsContent';
import apikey from "./data/config"

function App() {


  const [category , setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const newsAPI = async() => {
    try{

      // const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}`)
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c80c0bafeaa148d999ead374e4c07b47&category=${category }`)

      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
    }catch (error){
      console.log(error);
    }
  };
  
  console.log(newsArray)

  useEffect(()=>{
   newsAPI();
  },[newsResults, category])
 
  return (
    <div className="App">
      <NavBar setCategory={setCategory}/> 
      <NewsContent newsArray={newsArray} newsResults={newsResults}/>
      <Footer/> 
    </div>
  )
}

export default App
