import React from 'react'

const Hero = () => {
  return (
    <div>
        <main className='hero container'>
            <div className='Hero-content'>
                <h1>Your feets deserve the best</h1>
                <p>your feet deserve the best and we are here to help you with our shoes the best quality in the market satisfying your needs </p>
                <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button className='second-btn'>Category</button>
                 </div>
                 <div className='shoping'>
                    <p>Also Available On</p>
                    <div className='shoping-logo'>
                        <img src='images/amazon.png' alt='logo' width={60} height={60} />
                        <img src='images/flip.jpg' alt='logo' width={60} height={60} />
                    </div>
                 </div>
               </div>
               <div className='Hero-img'>
                <img src='images/redShoes.jpg' alt='logo' width={500} height={500} />
               </div>
        </main>
    </div>
  )
}

export default Hero