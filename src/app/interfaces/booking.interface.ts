import { Car } from "./car.interface";
import { user } from "./user.interface";

export interface Booking {
    id: string;
    car: Car;
    user: user;
    location: string;
    dateFrom: string;
    dateTo: string;
    type: string;
    totalPrice: number;
}