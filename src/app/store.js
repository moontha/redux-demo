import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservation';
import customersReducer from '../features/customerSlice';

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customer: customersReducer
    }
});

 