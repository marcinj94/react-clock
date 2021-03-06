import React from 'react';
import './CurrentDate.css'

const Date = (props) => {

    const day = props.day < 10 ? `0${props.day}` : props.day;
    const month = props.month < 10 ? `0${props.month}` : props.month;
    const year = props.year < 10 ? `0${props.year}` : props.year;


    return (
        <span className="date">
            {props.dayName}, {day}-{month}-{year}
        </span>
    );
}

export default Date;