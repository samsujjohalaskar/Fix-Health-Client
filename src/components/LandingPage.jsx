import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import Booking from './Booking';
import { Link as ScrollLink, Element } from 'react-scroll';
import DocSuggestions from './DocSuggestions';

const LandingPage = () => {
    const { city } = useParams();

    const sliderRef = useRef(null);

    const handleScroll = () => {
        const container = sliderRef.current;
        if (container) {
            const scrollStep = 1; // Adjust this value for the step size

            container.scrollLeft += scrollStep;

            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            }
        }
    };

    useEffect(() => {
        const intervalId = setInterval(handleScroll, 50); // Adjust the interval duration based on your preference

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {city &&
                <div className="doctors-overlay">
                    <div className="doctors-model">
                        <DocSuggestions city={city} />
                    </div>
                </div>
            }
            <div className="d-flex min-vh-100 custom-class" lc-helper="background" style={{}}>
                <div className="align-self-center text-center text-light col-md-8 offset-md-2">
                    <div className="lc-block mb-4">
                        <div editable="rich">
                            <h1 className="display-1 fw-bolder">Get quick and lasting pain relief with FixHealth</h1>
                        </div>
                    </div>

                    <div className="lc-block">
                        <div editable="rich">
                            <p className="lead fs-3">(3,313 Google Reviews)</p>
                            <p className="lead fs-3 text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        </div>
                    </div>

                    <div className="lc-block">
                        <ScrollLink to="scroll" className="scroll-me" smooth={true} duration={500}>
                            <svg style={{ cursor: "pointer" }} onclick="if (!document.querySelector('body').classList.contains('livecanvas-is-editing') ) this.closest('section').nextElementSibling.scrollIntoView({ behavior: 'smooth'  });" width="4em" height="4em" viewBox="0 0 16 16" class="text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg" lc-helper="svg-icon">
                                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"></path>
                            </svg>
                        </ScrollLink>

                        <script async="" src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"></script>
                    </div>
                </div>
            </div>

            <Element name="scroll" className="scroll-me">
                <div className="container my-5">
                    <div className="apoinment-cont row p-0 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <div className="booking-content">
                                <Booking urlCity={city} />
                            </div>
                        </div>

                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <div className="lc-block"><img className="rounded-start w-100" src="https://img.freepik.com/premium-photo/instructor-assisting-senior-woman-exercising_13339-279476.jpg" alt="Pshysio1" width="720" /></div>
                        </div>
                    </div>
                </div>
            </Element>

            <section>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center testimonial-heading">
                            <p className="fw-bold mb-3 fs-1">Testimonials</p>
                            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                                numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                                quisquam eum porro a pariatur veniam.
                            </p>
                        </div>
                    </div>

                    <div className="slider-container" ref={sliderRef}>
                        <div className="cardi">
                            <img className='mt-4' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(13).webp" alt="User 1" />
                            <div className="cardi-content mt-3">
                                <h5 className="font-weight-bold">Raghab Sharma</h5>
                                <p className='text-warning h4'><BiSolidQuoteLeft /></p>
                                <p className='testimonial-statement px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur</p>
                                <p className='text-warning h4 mb-4'><BiSolidQuoteRight /></p>
                            </div>
                        </div>

                        <div className="cardi">
                            <img className='mt-4' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="User 1" />
                            <div className="cardi-content mt-3">
                                <h5 className="font-weight-bold">Aditi Pallikal</h5>
                                <p className='text-warning h4'><BiSolidQuoteLeft /></p>
                                <p className='testimonial-statement px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur</p>
                                <p className='text-warning h4 mb-4'><BiSolidQuoteRight /></p>
                            </div>
                        </div>

                        <div className="cardi">
                            <img className='mt-4' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="User 1" />
                            <div className="cardi-content mt-3">
                                <h5 className="font-weight-bold">Sneha Patra</h5>
                                <p className='text-warning h4'><BiSolidQuoteLeft /></p>
                                <p className='testimonial-statement px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur</p>
                                <p className='text-warning h4 mb-4'><BiSolidQuoteRight /></p>
                            </div>
                        </div>

                        <div className="cardi">
                            <img className='mt-4' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="User 1" />
                            <div className="cardi-content mt-3">
                                <h5 className="font-weight-bold">Raj Bansal</h5>
                                <p className='text-warning h4'><BiSolidQuoteLeft /></p>
                                <p className='testimonial-statement px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur</p>
                                <p className='text-warning h4 mb-4'><BiSolidQuoteRight /></p>
                            </div>
                        </div>
                        <div className="cardi">
                            <img className='mt-4' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp" alt="User 1" />
                            <div className="cardi-content mt-3">
                                <h5 className="font-weight-bold">Sohail Khan</h5>
                                <p className='text-warning h4'><BiSolidQuoteLeft /></p>
                                <p className='testimonial-statement px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur</p>
                                <p className='text-warning h4 mb-4'><BiSolidQuoteRight /></p>
                            </div>
                        </div>
                        <div className="cardi">
                            <img className='mt-4' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="User 1" />
                            <div className="cardi-content mt-3">
                                <h5 className="font-weight-bold">Trinadh Kapoor</h5>
                                <p className='text-warning h4'><BiSolidQuoteLeft /></p>
                                <p className='testimonial-statement px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur</p>
                                <p className='text-warning h4 mb-4'><BiSolidQuoteRight /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                    {`
                        document.querySelectorAll('.slider-container').forEach(function (container) {
                            container.addEventListener('wheel', function (e) {
                                if (e.deltaY !== 0) {
                                    e.preventDefault();
                                    container.scrollLeft += e.deltaY;
                                }
                            });
                        });
                        `}
                </script>
            </section>
        </>
    )
}

export default LandingPage;
