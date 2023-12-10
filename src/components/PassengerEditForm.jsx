import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { savePassenger } from "../service/customerService";
import { Navigationbar } from "./NavigationBar";



export function PassengerDetailsForm(){
    const [passengerData, setPassengerData] =useState({FName:"",LName:"",Namtinality:"", Gender:""});
    
    const handleChange=(e)=>{
        setPassengerData({...passengerData, [e.target.name]:e.target.value});
    }
   //-------------------for save passenger data on UI
   const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          
        } catch (error) {
            console.log(error);
        }
   }
   //--------------------------------
    return(
        <>
        <Navigationbar></Navigationbar>

        <Container>
            <h4>Update Passenger Detail</h4>
            
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3"  >
                             <Form.Label>FName</Form.Label>
                             <Form.Control type="text" placeholder="Enter Name" name="FNAme" onKeyUp={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3"  >
                             <Form.Label>LName</Form.Label>
                             <Form.Control type="text" placeholder="Enter Name" name="LName" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                     <Form.Check
                             type="radio"
                             label="Male" 
                             name="Gender"   
                             onChange={handleChange} 
                        />
                         <Form.Check
                             type="radio"
                             label="Female"  
                             name="Gender"   
                             onChange={handleChange} 
                        />
                </Row>        
                <Row>
                   <Col lg={4}>
                        <Form.Group className="mb-3"  >
                             <Form.Label>Gamil</Form.Label>
                             <Form.Control type="email" placeholder="Enter Email" name="Email" onKeyUp={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3"  >
                             <Form.Label>Contact</Form.Label>
                             <Form.Control type="tel" placeholder="Enter contact no." name="Contact" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Button type="submit" variant="primary">Register</Button>
                </Row>
            </form>
        </Container>
        </>
    );
}