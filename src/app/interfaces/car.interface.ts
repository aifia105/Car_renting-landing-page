import { Carinfo } from "./carInfo";

export interface Car {
    id: string;
    name: string;
    priceDay: number;
    stars: number;
    type: string;
    image: string;
    info: Carinfo[];
    availablity: boolean;

}






    