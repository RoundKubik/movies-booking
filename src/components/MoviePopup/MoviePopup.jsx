import React, { useState } from "react";
import { convertToDateAndTime } from "../../utils/convertToDateAndTime";
import { validatePhoneNumber } from "../../utils/validatePhone";
import DateCard from "../DateCard/DateCard";
import "./MoviePopup.css";

const emptyFieldError = "Fill in the field";

const MoviePopup = ({ movie, cancel }) => {
  const [ticketsQuantity, setTicketsQuantity] = useState(1);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [selectedDate, setSelectedDate] = useState(movie.dates[0]);

  const decrement = () => {
    setTicketsQuantity(ticketsQuantity === 1 ? ticketsQuantity : ticketsQuantity - 1);
  };

  const increment = () => {
    setTicketsQuantity(
      ticketsQuantity === movie.ticketsNumber ? ticketsQuantity : ticketsQuantity + 1
    );
  };

  const onClose = () => {
    setNameError("");
    setPhoneNumberError("");
    cancel();
  };

  const onPhoneNumberChange = (e) => {
    const number = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    if (!number[1]) {
      e.target.value = "+";
      return;
    }
    if (!number[2]) {
      e.target.value = `+${number[1]}`;
      return;
    }

    const phone =
      `+${number[1]} (${number[2]}` +
      (number[3] ? `) ${number[3]}` : "") +
      (number[4] ? `-${number[4]}` : "") +
      (number[5] ? `-${number[5]}` : "");

    e.target.value = phone;
    return phone;
  };

  const submitOrder = () => {
    setNameError("");
    setPhoneNumberError("");
    if (name === "" || phoneNumber === "") {
      setNameError(name === "" ? emptyFieldError : "");
      setPhoneNumberError(phoneNumber === "" ? emptyFieldError : "");
      return;
    }

    const validPhoneError = validatePhoneNumber(phoneNumber);
    if (validPhoneError) {
      setPhoneNumberError(validPhoneError);
      return;
    }

    console.log("Your order was submited!");
    console.log("Name: ", name);
    console.log("Phone number: ", phoneNumber);
    console.log("Tickets quantity: ", ticketsQuantity);
    console.log("Date: ", convertToDateAndTime(selectedDate).date);
    console.log("Time: ", convertToDateAndTime(selectedDate).time);
    cancel();
  };

  return (
    <div className="movie-popup">
      <div className="movie-popup-info">
        <img className="movie-popup-info__img" src={movie.imgLg} alt={movie.alt} />
        <h2 className="movie-popup-info__title">{movie.title}</h2>
        <p className="movie-popup-info__description">{movie.description}</p>
        <p className="movie-popup-genres">
          <span className="movie-popup-genres__title">Genres:</span>{" "}
          {movie.genres.join(", ")}
        </p>
        {movie.dates.length ? (
          <>
            <hr className="horizontal" />
            <div className="movie-popup-summary">
              <span>
                {ticketsQuantity} {ticketsQuantity > 1 ? "tickets" : "ticket"}
              </span>
              <div className="movie-popup-summary__name">{name}</div>
              <span className="movie-popup-summary__date">
                {convertToDateAndTime(selectedDate).date}{" "}
                {convertToDateAndTime(selectedDate).time}
              </span>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="book-movie-ticket">
        <h3 className="book-movie-ticket__available-title">
          {movie.dates.length ? "Available date and time" : "Tickets info"}
        </h3>
        <span className="icon icon-cancel" onClick={onClose}></span>
        <div className="available-dates">
          {movie.dates.length ? (
            movie.dates.map((date, index) => {
              const result = convertToDateAndTime(date);
              return (
                <DateCard
                  key={index}
                  classes={
                    selectedDate.toString() === date.toString() ? "active-date" : ""
                  }
                  onClick={() => setSelectedDate(date)}
                  date={result.date}
                  time={result.time}
                />
              );
            })
          ) : (
            <div className="available-dates__no-available">
              <span>No available tickets</span>
            </div>
          )}
        </div>
        {movie.dates.length ? (
          <div className="tickets-quantity">
            <h3 className="book-movie-ticket__count-title">Count of tickets</h3>
            <div className="quantity-border">
              <form className="quantity-form">
                <input
                  data-testid="button-minus"
                  type="button"
                  className="quantity-form__minus"
                  onClick={decrement}
                />
                <span data-testid="quantity" className="quantity-form__number">
                  {ticketsQuantity}
                </span>
                <input
                  data-testid="button-plus"
                  type="button"
                  className="quantity-form__plus"
                  onClick={increment}
                />
              </form>
            </div>
            <p className="tickets-available">Available: {movie.ticketsNumber}</p>
          </div>
        ) : (
          <></>
        )}

        <div>
          <h3 className="book-movie-ticket__contact-title">Contact data</h3>
          <p className="input-wrapper">
            <label className="input-label">Name</label>
            <input
              className={`text-input ${nameError ? "error" : ""}`}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="error-message">{nameError}</span>}
          </p>
          <p className="input-wrapper">
            <label className="input-label">Phone number</label>
            <input
              className={`text-input ${phoneNumberError ? "error" : ""}`}
              type="text"
              placeholder="+7 (xxx) xxx-xx-xx"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(onPhoneNumberChange(e))}
            />
            {phoneNumberError && (
              <span className="error-message">{phoneNumberError}</span>
            )}
          </p>
        </div>

        <div className="movie-popup-buttons">
          <button
            className="button movie-popup-buttons__button"
            disabled={!movie.dates.length}
            onClick={onClose}
          >
            CANCEL
          </button>
          <button
            className="button movie-popup-buttons__button"
            disabled={!movie.dates.length}
            onClick={submitOrder}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
