import axios from "axios";


export async function fetchPassenger(){
    try {
        const response=await axios.get("http://127.0.0.1:4900/Customers");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function savePassenger(passengerData){
    try {
        const response=await axios.post("http://127.0.0.1:4900/Customers",passengerData);
        return response.data;
    } catch (error) {
        
    }
}

export async function deletePassenger(FName){
    try {
        const response= await axios.delete(`http://127.0.0.1:4900/Customers/${FName}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}