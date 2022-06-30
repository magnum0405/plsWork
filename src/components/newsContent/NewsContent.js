import { Container } from '@mui/system'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import "./newsContent.css"

const NewsContent = ({newsArray, newsResult}) => {
  return (
     <Container maxWidth='md'>
       <div className='content'>
        <div className="downloadMessage">
         <span className="downloadText">
            For the best expierence use inshort app your
         </span>
         <img 
            alt = "play store"
            height = " 80%"
            src = "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
         />
           <img 
            alt = "app store"
            height = " 80%"
            src = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
         />
        </div>
     
        {
          newsArray.map((newsItem)=>(
            <NewsCard newsItem={newsItem} key={newsItem.title}/>

          ))
        }

       </div>
       

  </Container>
  )
}

export default NewsContent
