import React , {useState} from 'react';
import Header from './header';
import './home.css'
import img from './images/1.png'
import ingredientsImg from './images/2.png'
import Data from '../data';
import { Carousel } from 'react-bootstrap';
import char1 from './images/dev.jpg'
import char2 from './images/dev2.jpg'
import char3 from './images/dev3.jpg'


const Home = () => {
    const blogItem = Data.map((item)=>{
        return(
            <div className='col-md-4'>
                <img src={item.img} alt="" />
                <div className="details">
                <h4>{item.title}</h4>
                <span>{item.time}</span>
                <h6>{item.price} <del>{item.priceOffer}</del> </h6>
                <hr/>
                </div>
                <button><a href="#">order now</a></button>
            </div>
        )
    })
    return ( 
        <>
        <Header/>
        <section className='numbers'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <p>SAVINGS</p>
                    </div>
                    <div className="col-md-3">
                        <h2>5786+</h2>
                        <p>PHOTOS</p>
                    </div>
                    <div className="col-md-3">
                        <h2>1440+</h2>
                        <p>ROCKETS</p>
                    </div>
                    <div className="col-md-3">
                        <h2>7110+</h2>
                        <p>GLOBES</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='pride'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} alt="img" />
                    </div>
                    <div className="col-md-6">
                    <h2 >We pride ourselves on making real food from the best ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  consectetur adipiscing elit Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="ingredients">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aut odit doloribus eos recusandae, corporis officiis nesciunt non atque sint? Dicta est perspiciatis enim? Aliquam animi vero exercitationem est rerum.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button className='btn d-block'>
                            <a href="#">Learn more</a>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <img src={ingredientsImg} alt="ingredients" />
                    </div>
                </div>
            </div>
        </section>
        <section className='wisdom'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-12 col-md-12">
                        <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    </div>
                        <a  href="#"> <i className="fa-solid fa-play"></i> Watch Our Story</a>
                </div>
            </div>
        </section>
        <section className='blogs'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>Explore Our Foods</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className="row">
                    {blogItem}
                </div>
            </div>
        </section>
        <section className='slide'>
        <h2>Testimonials</h2>
            <Carousel>
            <Carousel.Item>
                <img src={char1}  />
                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                <span>Johnthan Doe - UX Designer</span>
            </Carousel.Item>
            <Carousel.Item>
            <img src={char2}  />
            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                <span >Johnthan Doe - UX Designer</span>
            </Carousel.Item>
            <Carousel.Item>
            <img src={char3} />
            <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                <span>Simab Dave - Web Designer</span>
            </Carousel.Item>
            </Carousel>
        </section>
        <section className='question'>
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h5> <span>~</span> Is Foodera Bread really baked fresh each day?</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="col-md-6">
                        <h5><span>~</span> Do you bake breads containing animal fats or products?</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h5> <span>~</span> Can I order your products online?</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="col-md-6">
                        <h5> <span>~</span> When are you opening a shop near me?</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                </div>
            </div>
        </section>

        <section className='baker'>
            <div className='overlay'></div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6"> 
                        <h4>Baked fresh daily by bakers with passion.</h4>
                    </div>
                    <div className="col-md-6"> 
                        <button><a href="#">Learn More</a></button>
                    </div>
                </div>
            
            </div>
        </section>

        <section className="email">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <h2>Hurry up! Subscribe to our newsletter and get 25% Off</h2>
                <p>Limited time offer for this month. No credit card required.</p>
                <form>
                    <input type="email" placeholder="Email Address here"/>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</section>

        <section className='footer'>
        <footer className="text-center ">
            <div className="container pt-4">
                <section className="mb-4">
                <a
                    className="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://www.facebook.com/aya.elrefaay?mibextid=LQQJ4d"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fa-brands fa-facebook-f"></i></a>

                <a
                    className="btn btn-link btn-floating btn-lg text-body m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"></i></a>

                <a
                    className="btn btn-link btn-floating btn-lg text-body m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"></i></a>

                <a
                    className="btn btn-link btn-floating btn-lg text-body m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i></a>

                <a
                    className="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://www.linkedin.com/in/aya-ahmed-414856222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"></i></a>
                <a
                    className="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://github.com/ayyyaahmedd"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"></i></a>
                </section>
            </div>

            <div className="text-center p-3 foot">
                © 2023 Copyright:
                <a  href="http://ayaelrefaay580@gmail.com">Aya ElRefaay</a>
            </div>
            </footer>
        </section>
        </>
     );
}
 
export default Home;