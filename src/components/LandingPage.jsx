import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import "../css/landing.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Booking from './Booking';
import DocSuggestions from './DocSuggestions';

const LandingPage = () => {
    const { city, formData } = useParams();

    let actualData = null;
    if (formData) {
        actualData = JSON.parse(decodeURIComponent(formData));
    }

    const sliderRef = useRef(null);

    const handleScroll = (direction) => {
        const container = sliderRef.current;
        if (container) {
            const scrollAmount = 1; // Adjust this value based on your preference
            const scrollStep = 15; // Adjust this value for the step size

            if (direction === 'left') {
                container.scrollLeft -= scrollStep;
            } else {
                container.scrollLeft += scrollStep;
            }

            // Recursive call for smoother scrolling
            if (scrollAmount > 0) {
                requestAnimationFrame(() => handleScroll(direction));
            }
        }
    };

    return (
        <>
            <div className='landing-page'>
                <div className="">
                    <div className="heading">
                        Get quick and lasting pain relief with FixHealth
                    </div>
                    <div className="rating">
                        5.0
                        <span className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                        <span className='fs-5'>(3,313 Google Reviews)</span>
                    </div>
                </div>
                {!city &&
                    <div className="booking-content">
                        <Booking />
                    </div>
                }
            </div>
            <section>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center">
                            <h3 className="fw-bold mb-4">Testimonials</h3>
                            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                                numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                                quisquam eum porro a pariatur veniam.
                            </p>
                        </div>
                    </div>

                    <div className="slider-container" ref={sliderRef}>
                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="User 1" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Raghab Sharma</h5>
                                <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur...</p>
                            </div>
                        </div>

                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="User 2" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Maggie McLoan</h5>
                                <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>Autem, totam debitis suscipit saepe sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis labore laboriosam.</p>
                            </div>
                        </div>

                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="User 9" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.</p>
                            </div>
                        </div>

                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp" alt="User 3" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.</p>
                            </div>
                        </div>
                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp" alt="User 4" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.</p>
                            </div>
                        </div>
                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp" alt="User 3" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.</p>
                            </div>
                        </div>
                    </div>
                    <span className='navigation-arrows' onClick={() => handleScroll('left')}><FaChevronLeft /></span>
                    <span className='navigation-arrows' onClick={() => handleScroll('right')}><FaChevronRight /></span>
                </div>
                {city && actualData &&
                    <div className="doctors-overlay">
                        <div className="doctors-model">
                            <DocSuggestions city={city} formData={formData} />
                        </div>
                    </div>
                }
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
