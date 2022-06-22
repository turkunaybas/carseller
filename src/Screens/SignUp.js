import React, { useContext, useState } from "react";
import { CarContext } from '../CarContext/CarContext';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const { userList, setUserList } = useContext(CarContext);
    const navigate = useNavigate();

    const [details, setDetails] = useState({ name: "", no: "", password: "", mail: "", surname: "" });


    // ekrandan girdiğimiz verileri alıp yeni bir kişi objesi oluşturduğumuz fonks bunun içine ekrandan aldığımız bilgileri gönderdik
    const NewUser = (details) => {
        return (
            { mail: details.mail, password: details.password, name: details.name }
        )
    };

    // kullanıcı kaydetme fonks
    const Save = (details) => {
        if (details.name !== "" && details.mail !== "" && details.password !== "") {

        
//kullanıcı lsitemde aynı kullanıcının olup olmadığını kotrol ettim
                if (userList.find(item => item.mail === details.mail)) {
                    alert("aynı kullanıcı kaydedilemez")
                   
                }
                // aynı kullanıcı yoksa ekrandan aldığım bilgileri newUser fonks kullanrak yeni obje oluşturup kullanıcı listeme kaydettim
                else {
                    setUserList([...userList, NewUser(details)]);
                    setDetails({ name: "", no: "", password: "", mail: "", surname: "" });
                    
                    navigate('/')
                    console.log(userList, "kayıtlarr")
                }

           
    
        }
        else alert("Boş alanları doldurunuz!")

    };

    return (
        <div style={{ marginLeft: "auto", marginRight: "auto", backgroundColor: "#1A1A1D", padding: "4%", alignItems: "center", display: "flex", justifyContent: "center" }}>
            <div className="signuppage">

                <div
                    style={{
                        background: "#C3073F",
                        width: "100%",
                        height: "5rem",
                        borderRadius: "10px 10px 0px 0px",
                        textAlign: "center",

                    }}
                >
                    <label style={{ fontSize: 30, }}>Kayıt Ol</label>
                </div>
                <div style={{ padding: 50, paddingRight: "30%" }}>

                    <h5 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
                        E-Posta
                    </h5>
                    <input
                        onChange={e => setDetails({ ...details, mail: e.target.value })}
                        value={details.mail} 
                        type="email"
                        style={{
                            borderRadius: "5px",
                            width: "100%",
                            height: "2em",
                            padding: 25,
                            letterSpacing: 2,
                            fontWeight: "bold",
                        }}
                    ></input>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 25,
                        }}
                    >
                        <div>
                            <h5 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
                                İsim
                            </h5>
                            <input
                                onChange={e => setDetails({ ...details, name: e.target.value })}
                                value={details.name} 
                                style={{
                                    borderRadius: "5px",
                                    height: "2m",
                                    padding: 15,
                                    letterSpacing: 2,
                                    fontWeight: "bold",
                                }}
                            ></input>
                        </div>

                        <div>
                            <h5 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
                                Soyisim
                            </h5>
                            <input
                            value={details.lastName} 
                                onChange={e => setDetails({ ...details, lastName: e.target.value })}
                                style={{
                                    borderRadius: "5px",
                                    height: "2m",
                                    padding: 15,
                                    letterSpacing: 2,
                                    fontWeight: "bold",
                                }}
                            ></input>
                        </div>
                    </div>

                    <h5 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
                        Telefon Numarası
                    </h5>
                    <input
                        onChange={e => setDetails({ ...details, no: e.target.value })}
                        value={details.no} 
                        style={{
                            borderRadius: "5px",
                            width: "100%",
                            height: "2m",
                            padding: 15,
                            letterSpacing: 2,
                            fontWeight: "bold",
                        }}
                    ></input>
                    <h5 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
                        Şifre
                    </h5>
                    <input
                        onChange={e => setDetails({ ...details, password: e.target.value })}
                        value={details.password} 
                        type="password"
                        style={{
                            borderRadius: "5px",
                            width: "100%",
                            height: "2m",
                            padding: 15,
                            letterSpacing: 2,
                            fontWeight: "bold",
                        }}
                    ></input>


                    <button onClick={()=>{Save(details)}} className="signinbutton">
                        Kayıt Ol
                    </button>


                </div>
            </div>




        </div>


    )
}

export default SignUp