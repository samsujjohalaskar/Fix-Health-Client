import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/services';
import { useNavigate } from 'react-router-dom';
import { GiCancel } from "react-icons/gi";

const DocSuggestions = ({ city }) => {
    const [doctors, setDoctors] = useState([]);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let formattedCity = capitalizeFirstLetter(city);

    useEffect(() => {
        const fetchDoctors = async () => {
            setLoader(true);
            try {
                const response = await fetch(`${BASE_URL}/get-doctors/${formattedCity}`);
                if (response.ok) {
                    const data = await response.json();
                    setDoctors(data);
                } else {
                    console.error('Error fetching doctors');
                }
            } catch (error) {
                console.error('Error fetching doctors', error);
            } finally {
                setLoader(false);
            }
        };

        fetchDoctors();
    }, [city,formattedCity]);

    const handleBooking = (data) => {
        window.alert("Booking Success!");
        console.log("Surgeon Data:", data);
        navigate("/");
    }

    const handleCancel = () => {
        navigate("/");
    }

    return (
        <>
            {loader ? <h1>Finding Best Doctors for You...</h1> :
                <>
                    <div className='doc-sugg-heading d-flex justify-content-between'>
                        <h2>Best Doctors in {formattedCity}</h2>
                        <h2 style={{cursor: "pointer"}} onClick={() => handleCancel()}><GiCancel /></h2>
                    </div>
                    <div className='doc-cards-container'>
                        {doctors.data && doctors.data.map((d, index) => (
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(${index + 1}).webp`} alt="User" />
                                <div className="card-body">
                                    <h5 className="card-title">{d.name}</h5>
                                    <h6 className="card-text">{d.expertise}</h6>
                                    <p className="card-text">{d.email}</p>
                                    <button onClick={() => handleBooking(d)} className="doc-sug-buttons">Book</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}

export default DocSuggestions
