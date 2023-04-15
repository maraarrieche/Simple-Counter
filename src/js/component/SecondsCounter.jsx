import React from 'react';
import propTypes from 'prop-types';


export const SecondsCounter = (props) => {

    return (
        <>
        <div className="row justify-content-center bg-dark ms-3 me-3 mt-3 mb-3">
        <ClockIcon/>
        <SecondsNumber second={parseInt(props.timer/100000 % 10)}/>
        <SecondsNumber second={parseInt(props.timer/10000 % 10)}/>
        <SecondsNumber second={parseInt(props.timer/1000 % 10)}/>
        <SecondsNumber second={parseInt(props.timer/100 % 10)}/>
        <SecondsNumber second={parseInt(props.timer/10 % 10)}/>
        <SecondsNumber second={parseInt(props.timer % 10)}/>
        </div>
        </>
    )
}


const SecondsNumber = (props) => {

    return(
        <div className="card text-bg-dark mb-3 ms-3 mt-2 text-center" style={{width: "10rem", minHeight: "15rem"}}>
        <h1 className="card-title my-auto" style={{fontSize: "5rem"}}>{props.second}</h1>
        </div>
    )
}

export const ClockIcon = () =>{
    return(
    <div className="card text-bg-dark mb-3 ms-3 mt-2 text-center" style={{width: "10rem", minHeight: "15rem"}}>
        <i class="far fa-clock my-auto" style={{fontSize: "5rem"}}></i>
        </div>
    )
}


SecondsNumber.propTypes = {
    second: propTypes.number
}
