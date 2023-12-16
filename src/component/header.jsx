import React from 'react';
import './header.css'


const Header = () => {
    return ( 
        <>
        <div className=' header-div'>
            <div className="container"> 
                <div className='col-md-6 head-txt'>
                    <h2>Good food choices are good <br/> investments.</h2>
                    <p className='my-3'>Lorem ipsum dolor sit, molestias in possimus illum tenetur, illo deserunt esse. Accusamus, voluptatibus quis? Neque mollitia fugit quae voluptate laborum nulla.</p>
                    <button  > Order Now  <i className="fa-solid fa-basket-shopping "></i> </button>
                    <button >Learn More</button>
                </div>
                <div className='col-md-6'>
                
                    </div>
            </div>      
        </div>
        </>
    );
}

export default Header;