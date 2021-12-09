import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFood } from '../features/customerSlice';

export default function CustomerCard({ name, id, foods }) {
    const dispatch = useDispatch();
    const [customerFoodInput, setCutomerFoodInput] = useState('');
    // if (!foods) {
    //     foods = [];
    // }
    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div>{foods.map((food, index) => {
                    return <p key={index}>{food}</p>
                })
                }
                </div>
                <div className="customer-food-input-container">
                    <input
                        value={customerFoodInput}
                        onChange={(e) => setCutomerFoodInput(e.target.value)}
                    />
                    <button onClick={() => {
                        if(!customerFoodInput) return;

                        dispatch(addFood({
                            id, 
                            foods: customerFoodInput
                        }
                        ));
                        setCutomerFoodInput('');
                    }

                    }>Add</button>
                </div>
            </div>
        </div >
    )
}
