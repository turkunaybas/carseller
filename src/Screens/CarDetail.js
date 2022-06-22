import React, { useContext, useState } from "react";

import { CarContext } from '../CarContext/CarContext';
import { useNavigate } from 'react-router-dom';
import emailjs, { send } from 'emailjs-com';
import { Modal } from 'react-bootstrap';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function CarDetail({ car }) {
    const { currentCar, setCurrentCar } = useContext(CarContext);

    // mail gönderme fonks
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_39txd1c', e.target, 'L7whYYprvHUdnw04f')
            .then((result) => {
                console.log(result.text);
                alert("Teklif mailiniz gönderildi.");
            }, (error) => {
                console.log(error.text);
                alert(error.text + "HATA !!!!")
            });
        e.target.reset();
    }

    // mail modalını açtık
    const onMail = (mail) => {
        setMaill(mail);
        setShow(true);
    }
    
  
    const [show, setShow] = useState(false);
    const [maill, setMaill] = useState("");

    const handleClose = () => setShow(false);
    return (
        <div style={{ paddingTop: "3%", flexDirection: "column", backgroundColor: "#1A1A1D", height: 1100, display: "flex", alignItems: "center" }}>



            <img style={{ borderRadius: 5, }} height="350" width="700" src={currentCar.file} ></img>




            <div
                style={{
                    width: 600,
                    background: "#4E4E50",
                    borderRadius: 10,
                    padding: 20,
                    textAlign: "left",
                    marginTop: "2%"
                }}
            >
                <div style={{ padding: 20, color: "white" }}>
                    <div
                        style={{
                            background: "#696969",
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    >
                        <h3 style={{ padding: 10 }}>Sene: {currentCar.year}</h3>
                    </div>
                    <div
                        style={{
                            background: "#696969",
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    >
                        <h3 style={{ padding: 10 }}>Marka: {currentCar.brand}</h3>
                    </div>
                    <div
                        style={{
                            background: "#696969",
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    >
                        <h3 style={{ padding: 10 }}>
                            Açıklama: {currentCar.description}
                        </h3>
                    </div>
                    <div
                        style={{
                            background: "#696969",
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    >
                        <h3 style={{ padding: 10 }}>Renk: {currentCar.color}</h3>
                    </div>
                    <div
                        style={{
                            background: "#696969",
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    >
                        <h3 style={{ padding: 10 }}>
                            Fiyat: {currentCar.price}
                        </h3>
                    </div>
                    <div
                        style={{
                            background: "#696969",
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    >
                        <h3 style={{ padding: 10 }}>
                            görüntülenme: {currentCar.view}
                        </h3>
                    </div>
                    <button onClick={() => { onMail(currentCar.mail) }} className="signinbutton">
                        Mail At
                    </button>

                </div>
                <Modal show={show} onHide={handleClose} size="lg"
                    aria-labelledby="contained-modal-title-"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                         Mail
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form className='xx' onSubmit={sendEmail}>
                            <div className="row pt-1 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                    <input type="text" placeholder="Ad Soyad" name="name" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" hidden value={maill} placeholder="Email Address" name="email" />
                                </div>

                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea id="" cols="30" rows="8" placeholder="Mesajın" name="message"></textarea>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <Button type="submit" value="Send Message">Gönder</Button>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>

                </Modal>
            </div>
        </div>
    )
}

export default CarDetail