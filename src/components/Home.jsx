import React from 'react'
import Carousel from './Carousel'
import Dummysecetion from './Dummysecetion'
import DiscountProduct from './DiscountProduct'
import Newarrivals from './Newarrivals'
import Bestsales from './Bestsales'
import Footer from './Footer'
const Home = ( {addToCart}) => {
  return (
    <div>
    <Carousel />
     <Dummysecetion /> 
     <DiscountProduct addToCart={addToCart} />
     <Newarrivals addToCart={addToCart} />
     <Bestsales addToCart={addToCart}/>
    <Footer />  
    </div>
  )
}

export default Home
