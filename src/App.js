import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ReservationCard from "./components/ReservationCard";
import { useState } from "react";
import { addReservation } from "./features/reservation";
import CustomerCard from "./components/CustomerCard";

function App() {
  const reservations = useSelector((state) => state.reservations.value);
  const [reservationInput, setReservationInput] = useState("");
  const dispatch = useDispatch();

  const customers = useSelector((state) => state.customer.value);

  const handleAddReservations = () => {
    if (!reservationInput) return;

    dispatch(addReservation(reservationInput));
    setReservationInput('');
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return (
                  <ReservationCard name={name} index={index} key={index} />
                );
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationInput}
              onChange={(e) => setReservationInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                foods={customer.foods}
                key={customer.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
