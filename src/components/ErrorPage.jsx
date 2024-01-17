import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>This Page Does Not Exist</h1>
            <a onClick={handleGoHome}>home</a>
        </div>
    )
}

export default ErrorPage
