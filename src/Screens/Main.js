import React, { useContext,} from "react";
import { CarContext } from '../CarContext/CarContext';
import {  Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function Main() {
    const {  selected ,setSelected} = useContext(CarContext);
    const navigate = useNavigate();
    return (
        <div>
            <div
                style={{
                    background: "#4E4E50",
                    borderRadius: "0px",
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1%",

                }}
            >
                <h2>ARABANI.AL</h2>
                {/* <Link to="/addcar"><button className="customizedButton addCarButton">add car</button></Link> */}






                {selected !== "" && selected!==undefined ? (<div style={{ display: "flex" }}>
                    <Link to="/addcar"><button className="customizedButton addCarButton">Araba Ekle</button>
                    </Link>

                    <Link to="/signin">
                        <button onClick={()=>{navigate('/');setSelected("");  }} className="customizedButton addCarButton" style={{ marginLeft: 15, backgroundColor: "#F2F2F2", color: "black" }}> Çıkış Yap</button>
                    </Link>


                </div>) : (<div style={{ display: "flex" }}>

                    <Link to="/signin">
                        <button className="customizedButton addCarButton" style={{ marginRight: 15, backgroundColor: "#F2F2F2", color: "black" }}> Giriş Yap</button>
                    </Link>

                    <Link to="/signup">
                        <button className="customizedButton addCarButton" style={{ marginRight: 15, backgroundColor: "#F2F2F2", color: "black" }}> Kayıt Ol </button>
                    </Link>

                </div>)}



            </div>
        </div>

    )
}

export default Main