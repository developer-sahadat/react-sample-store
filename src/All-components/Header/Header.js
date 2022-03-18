import React from 'react';
import"./header.css"
import logo from '../images/logo.png'
import banner1 from '../images/Untitled design (1).png'
import banner2 from '../images/Untitled design (2).png'
import banner3 from '../images/Untitled design.png'
import Carousel from 'react-bootstrap/Carousel'



const Header = () => {
    return (
        <div>
           <section className='bg-light shadow'>
                <nav className='navbar-content container'>
                    <div>
                        <img className='logo' src={logo} alt="" />
                    </div>
                    <div className="navigation">
                        <ul>
                            <li>Home</li>
                            <li>Products </li>
                            <li>Contact Us</li>
                            <li>Cart</li>
                            <li>FAQ</li>
                        </ul>

                    </div>
                </nav>
           </section>

           <section className='w-100'>
           <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           </section>
         
        </div>
    );
};

export default Header;