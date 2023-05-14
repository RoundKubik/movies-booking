import React from "react";
import "./DateCard.css";

const DateCard = ({ date, time, onClick, classes }) => {
  return (
    <div className={`date-card ${classes}`} onClick={onClick}>
      <span className="date-card__date">{date}</span>
      <span className="date-card__time">{time}</span>
    </div>
  );
};

export default DateCard;
