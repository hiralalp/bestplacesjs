import React from "react";
import "./styles.css";
import { useState } from "react";

const placeDB = {
  adventure: [
    { name: "Rishikesh", rating: "4/5" },
    { name: "Manali", rating: "3.5/5" }
  ],

  religious: [
    {
      name: "Haridwar",
      rating: "5/5"
    },
    {
      name: "Ujjain",
      rating: "4.5/5"
    }
  ],
  nature: [
    {
      name: "Ooty",
      rating: "3.5/5"
    },
    {
      name: "Mahabaleshwar",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("nature");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🚵‍♂️🚞🌄 best places to visit </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite places. Select a category to get started{" "}
      </p>

      <div>
        {Object.keys(placeDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {placeDB[selectedGenre].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
