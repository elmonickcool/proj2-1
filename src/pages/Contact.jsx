import { initializeApp } from "firebase/app";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const firebaseConfig = {
    apiKey: "AIzaSyA8wNjaBEvU9IE6igfsM8c7wbWd3TKBY6A",
    authDomain: "contactform-pokemon.firebaseapp.com",
    databaseURL: "https://contactform-pokemon-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contactform-pokemon",
    storageBucket: "contactform-pokemon.appspot.com",
    messagingSenderId: "367133485033",
    appId: "1:367133485033:web:e625c7c220cf92a5e74d78"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contactnum, setContact] = useState();
    const [feedback, setFeedback] = useState();

    const userCollection = collection(db, "contactform-pokemon")

    const handleSubmit = () => {
        addDoc(userCollection, {
            FullName: name,
            Email: email,
            Contact: contactnum,
            Message: feedback,
        })
    }

    return (
        <div>
            <div className="allBG">
                <div className="BG">
                    <div className="container contactMargin">
                        <div className="row contactCol1 d-flex align-items-center justify-content-center">
                            <div className="col-6 text-white">
                                <div className="text-center text-warning pb-5">
                                    <h1 className="aboutUsHeader">Drop us a line</h1>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="clickMe1">
                                        <Form.Label className="aboutUsHeader">Full name</Form.Label>
                                        <Form.Control type="text" placeholder="Juan Dela Cruz" className="hero1SearchButton rounded-5" onChange={(event) => {
                                            setName(event.target.value)
                                        }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="clickMe2">
                                        <Form.Label className="aboutUsHeader">Email</Form.Label>
                                        <Form.Control type="text" placeholder="name@example.com" className="hero1SearchButton rounded-5" onChange={(event) => {
                                            setEmail(event.target.value)
                                        }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="clickMe3">
                                        <Form.Label className="aboutUsHeader">Contact Number</Form.Label>
                                        <Form.Control type="number" placeholder="09123456789" className="hero1SearchButton rounded-5" onChange={(event) => {
                                            setContact(event.target.value)
                                        }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="clickMe4">
                                        <Form.Label className="aboutUsHeader">Message</Form.Label>
                                        <Form.Control className="hero1SearchButton" as="textarea" rows={5} onChange={(event) => {
                                            setFeedback(event.target.value)
                                        }} placeholder="Hi! Good Day, I would like to..." />
                                    </Form.Group>

                                    <Button className='rounded-5' type="submit" onClick={handleSubmit}>
                                        <img className='hero1Pokeball' src="pokeball.png" alt="" />
                                        Submit
                                    </Button>

                                </Form>
                            </div>
                            <div className="col-6">
                                <img src="contactlogo.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;