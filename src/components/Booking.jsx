import React, { useState } from 'react';
import "../css/booking.css";
import { useNavigate } from 'react-router-dom';

const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Pune', 'Jaipur', 'Lucknow'];

const Booking = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        otp: '',
        age: '',
        city: '',
        companyName: '',
        painIntensity: '',
        sufferingDuration: '',
        physioExperience: '',
        physioExperienceDetail: '',
        date: '',
    });

    const actualOTP = 1234;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleCancel = () => {
        setStep(1);
        setFormData({
            name: '',
            phoneNumber: '',
            otp: '',
            age: '',
            city: '',
            companyName: '',
            painIntensity: '',
            sufferingDuration: '',
            physioExperience: '',
            physioExperienceDetail: '',
            date: '',
        });
        console.log('Booking process cancelled');
    };

    const handleFindPhysiotherapist = () => {
        let formDataString = null;
        if (formData) {
            formDataString = encodeURIComponent(JSON.stringify(formData));
        }
        navigate(`/${formData.city.toLowerCase()}/${formDataString}`);
        console.log('Inputs:', formData); // Can do anything with this data
        setFormData({
            name: '',
            phoneNumber: '',
            otp: '',
            age: '',
            city: '',
            companyName: '',
            painIntensity: '',
            sufferingDuration: '',
            physioExperience: '',
            physioExperienceDetail: '',
            date: '',
        });
    };

    const isPhoneNumberValid = (phoneNumber) => /^\d{10}$/.test(phoneNumber);

    return (
        <>
            {step < 6 &&
                <div className='bookings'>
                    {(step === 2 || step === 3 || step === 4 || step === 5) &&
                        (<div div style={{ background: '', padding: '10px', marginBottom: '10px' }}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <div key={index} style={{ width: '20px', height: '20px', background: step > index ? '#007aff' : 'gray', borderRadius: '50%', display: 'inline-block', margin: '0 5px' }}></div>
                            ))}
                            <span className="steps-span">{step} of 5</span>
                        </div>)
                    }
                    {
                        step === 1 &&
                        <div className='booking-content-heading'>
                            <h3>Book an Appointment for FREE</h3>
                            <h5>60+ Expert Physiotherapists for 200+ Conditions</h5>
                        </div>
                    }

                    {
                        step === 2 &&
                        <div className='booking-content-heading'>
                            <h5>Please Enter the OTP Sent to Your Mobile</h5>
                        </div>
                    }
                    {
                        step === 3 &&
                        <div className='booking-content-heading'>
                            <h5>Help us understand you better</h5>
                        </div>
                    }
                    {
                        step === 4 &&
                        <div className='booking-content-heading'>
                            <h5>Help us choose the right physio for you</h5>
                        </div>
                    }
                    {
                        step === 5 && formData.age <= 40 &&
                        <div className='booking-content-heading'>
                            <h5>Pick Your Consultation Slot</h5>
                        </div>
                    }

                    {
                        step === 1 && (
                            <div className='booking-inputs'>
                                <input type="text" name="name" placeholder="Your Name" onChange={handleInputChange} value={formData.name} />
                                <input type="digit" name="phoneNumber" placeholder="Phone Number" onChange={e => handleInputChange({ target: { name: 'phoneNumber', value: e.target.value.replace(/\D/, '') } })} value={formData.phoneNumber} />
                                <button
                                    className={`get-started-button ${(!formData.name || !isPhoneNumberValid(formData.phoneNumber)) ? 'disabled' : ''}`}
                                    onClick={handleNext}
                                    disabled={!formData.name || !isPhoneNumberValid(formData.phoneNumber)}
                                >
                                    Get Started
                                </button>
                            </div>
                        )
                    }

                    {
                        step === 2 && (
                            <div className='booking-inputs'>
                                <input type="text" name="otp" placeholder="Enter the OTP(which is -1234)" onChange={handleInputChange} value={formData.otp} />
                                <div className="booking-buttons">
                                    <button className='regular-back-buttons' onClick={handleBack}>Back</button>
                                    <button className={`regular-buttons ${formData.otp != actualOTP ? 'disabled' : ''}`} onClick={handleNext} disabled={formData.otp != actualOTP}>Verify & Next</button>
                                    {/* <button onClick={handleCancel}>Cancel</button> */}
                                </div>
                            </div>
                        )
                    }

                    {
                        step === 3 && (
                            <div className='booking-inputs'>
                                <input type="number" name="age" placeholder="Age" onChange={handleInputChange} value={formData.age} />
                                <select name="city" onChange={handleInputChange} value={formData.city}>
                                    <option value="" disabled>Select City</option>
                                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                                </select>
                                <input type="text" name="companyName" placeholder="Company Name" onChange={handleInputChange} value={formData.companyName} />
                                <div className="booking-buttons">
                                    <button className='regular-back-buttons' onClick={handleBack}>Back</button>
                                    <button className={`regular-buttons ${(!formData.age || formData.age <= 0 || formData.age >= 101 || !formData.city || !formData.companyName) ? 'disabled' : ''}`} onClick={handleNext} disabled={!formData.age || formData.age <= 0 || formData.age >= 101 || !formData.city || !formData.companyName}>Next</button>
                                    {/* <button onClick={handleCancel}>Cancel</button> */}
                                </div>
                            </div>
                        )
                    }

                    {
                        step === 4 && (
                            <div className='booking-inputs'>
                                <label className='booking-inputs-label'>
                                    One a scale of 1 - 5 (5 being worst), What is the intensity of your pain?
                                </label>
                                <div className="bookings-label-inputs">
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value} className='booking-inputs-label'>
                                            <input
                                                type="checkbox"
                                                name="painIntensity"
                                                value={value}
                                                onChange={handleInputChange}
                                                checked={formData.painIntensity.includes(value.toString())}
                                            />
                                            {" "}{value}
                                        </label>
                                    ))}
                                </div>
                                <br />
                                <label className='booking-inputs-label'>
                                    How long have you been experiencing the problem(in days)?
                                </label>
                                <div className="bookings-label-inputs">
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <label key={value}>
                                            <input
                                                type="checkbox"
                                                name="sufferingDuration"
                                                value={value}
                                                onChange={handleInputChange}
                                                checked={formData.sufferingDuration.includes(value.toString())}
                                            />
                                            {" "}{`${(value - 1) * 5 + 1} - ${value * 5}`}
                                        </label>
                                    ))}
                                </div>
                                <div className="booking-buttons">
                                    <button className='regular-back-buttons' onClick={handleBack}>Back</button>
                                    <button className={`regular-buttons ${(!formData.painIntensity || !formData.sufferingDuration) ? 'disabled' : ''} `} disabled={(!formData.painIntensity || !formData.sufferingDuration)} onClick={handleNext}>Next</button>
                                    {/* <button onClick={handleCancel}>Cancel</button> */}
                                </div>
                            </div>
                        )
                    }

                    {
                        step === 5 && (
                            <div className='booking-inputs'>
                                {formData.age > 40 && (
                                    <div>
                                        <label className='booking-inputs-label'>
                                            Have you had any previous experience with physiotherapy?
                                        </label>
                                        <div className="bookings-label-inputs">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="physioExperience"
                                                    value="Yes"
                                                    onChange={handleInputChange}
                                                    checked={formData.physioExperience === 'Yes'}
                                                />
                                                {" "}Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="physioExperience"
                                                    value="No"
                                                    onChange={handleInputChange}
                                                    checked={formData.physioExperience === 'No'}
                                                />
                                                {" "}No
                                            </label>
                                        </div>
                                        {formData.physioExperience === 'Yes' && (
                                            <div className='mt-3'>
                                                <textarea
                                                    rows="2" cols="31"
                                                    type="textarea"
                                                    name="physioExperienceDetail"
                                                    placeholder="Please Provide details of your physiotherapy experience(not mandatory)"
                                                    onChange={handleInputChange}
                                                    value={formData.physioExperienceDetail}
                                                />
                                            </div>
                                        )}
                                        <label className='booking-inputs-label mt-3'>
                                            Select Date of Appointment:
                                        </label>
                                        <div className="bookings-label-inputs">
                                            {[0, 1, 2].map((value) => {
                                                const date = (() => {
                                                    if (value === 0) {
                                                        return 'Today';
                                                    } else if (value === 1) {
                                                        return 'Tomorrow';
                                                    } else {
                                                        const inTwoDays = new Date();
                                                        inTwoDays.setDate(inTwoDays.getDate() + 2);

                                                        const options = { month: 'short', day: 'numeric' };
                                                        return 'In 2 Days';
                                                    }
                                                })();

                                                return (
                                                    <label key={value} className='booking-inputs-label'>
                                                        <input
                                                            type="checkbox"
                                                            name="date"
                                                            value={date}
                                                            onChange={handleInputChange}
                                                            checked={formData.date === date}
                                                        />
                                                        {" "}{date}
                                                    </label>
                                                );
                                            })}
                                        </div>
                                        <div className="booking-buttons">
                                            <button className='regular-back-buttons' onClick={handleBack}>Back</button>
                                            <button className={`regular-buttons ${(!formData.physioExperience || !formData.date) ? 'disabled' : ''} `} disabled={(!formData.physioExperience || !formData.date)} onClick={handleFindPhysiotherapist}>Find Physiotherapist</button>
                                            {/* <button onClick={handleCancel}>Cancel</button> */}
                                        </div>
                                    </div>
                                )}
                                {formData.age <= 40 && (
                                    <div className='booking-inputs'>
                                        <label className='booking-inputs-label'>
                                            Select Date of Appointment:
                                        </label>
                                        <div className="bookings-label-inputs">
                                            {[0, 1, 2].map((value) => {
                                                const date = (() => {
                                                    if (value === 0) {
                                                        return 'Today';
                                                    } else if (value === 1) {
                                                        return 'Tomorrow';
                                                    } else {
                                                        const inTwoDays = new Date();
                                                        inTwoDays.setDate(inTwoDays.getDate() + 2);

                                                        const options = { month: 'short', day: 'numeric' };
                                                        return 'In 2 Days';
                                                    }
                                                })();

                                                return (
                                                    <label key={value} className='booking-inputs-label'>
                                                        <input
                                                            type="checkbox"
                                                            name="date"
                                                            value={date}
                                                            onChange={handleInputChange}
                                                            checked={formData.date === date}
                                                        />
                                                        {" "}{date}
                                                    </label>
                                                );
                                            })}
                                        </div>
                                        <div className="booking-buttons">
                                            <button className='regular-back-buttons' onClick={handleBack}>Back</button>
                                            <button className={`regular-buttons ${(!formData.date) ? 'disabled' : ''} `} disabled={(!formData.date)} onClick={handleFindPhysiotherapist}>Find Physiotherapist</button>
                                            {/* <button onClick={handleCancel}>Cancel</button> */}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    }
                </div >
            }
        </>
    );
};

export default Booking;
