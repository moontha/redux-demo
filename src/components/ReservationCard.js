import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservation';
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from 'uuid';

export default function ReservationCard({name, index}) {
    const dispatch = useDispatch();

    return (
        <div>
            <div onClick={()=>{
                dispatch(removeReservation(index));
                dispatch(addCustomer({
                    id:uuid(),
                    name,
                    foods:[]
                }))
            }} className="reservation-card-container">{name}</div>
        </div>
    )
}
