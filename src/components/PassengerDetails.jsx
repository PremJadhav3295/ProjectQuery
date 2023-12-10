import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { savePassenger } from "../service/customerService";



export function PassengerDetailsForm(){
    const [passengerData, setPassengerData] =useState({FName:"",LName:"",Gender:"", Email:"", Contact:""});
    const [isSubmitted,setIsSubmitted]=useState(false);
    
    const handleChange=(e)=>{
        setPassengerData({...passengerData, [e.target.name]:e.target.value});
    }
   //-------------------for save passenger data on UI
   const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const result=await savePassenger(passengerData);
           setIsSubmitted(true);
           setTimeout(()=>{  //New .....................
            setIsSubmitted(false);
           }, 1500);
           console.log(result.message)
        } catch (error) {
            console.log(error);
        }
   }
   //--------------------------------
    return (
        <>
        <Container>
            <h4>Personal Details</h4>

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
            <Row className="mt-3"> 
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success">Student Registered</Alert>:null}
                </Col>
            </Row>
        </Container>
        </>
    );
}