import React from 'react'

const Time = (props) => {

    const seconds = props.seconds < 10 ? `0${props.seconds}` : props.seconds;
    const minutes = props.minutes < 10 ? `0${props.minutes}` : props.minutes;
    const hours = props.hours < 10 ? `0${props.hours}` : props.hours;

    return (
        <span className="time">
            {hours}:{minutes}:{seconds}
        </span>
    );
}

export default Time;