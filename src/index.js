import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>_ FAST REACT PIZZA CO. _</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzasNum = pizzas.length;

  return (
    <main className="main">
      <div className="menu">
        <h3>OUR MENU</h3>
        <p>
          Authentic Italian cuisine. {pizzasNum} creative dishes to choose from.
          All from
          <br />
          our stone oven, all organic, all delicious.
        </p>
      </div>
      {pizzasNum > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div className="details">
        <p className="name">{pizzaObj.name}</p>
        <span className="ingredients">{pizzaObj.ingredients}</span>
        <span className="price">{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 5;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      <Order isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
    </footer>
  );
}

function Order({ isOpen, openHour, closeHour }) {
  return (
    <div>
      {isOpen ? (
        <div>
          <p>FAST PIZZA CO. visit us or order online 👍:)</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We`re happy to welcome you between {openHour}:00 to {closeHour}:00
        </p>
      )}
      <p>
        {new Date().getFullYear()} - FAST REACT PIZZA CO. All rights reserved
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
