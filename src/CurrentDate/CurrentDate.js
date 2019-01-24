import React from 'react';

const Date = (props) => {

    const day = props.day < 10 ? `0${props.day}` : props.day;
    const month = props.month < 10 ? `0${props.month}` : props.month;
    const year = props.year < 10 ? `0${props.year}` : props.year;


    return (
        <span className="currentDate">
            {props.dayName}, {day}-{month}-{year}
        </span>
    );
}

export default Date;