import React, { useContext} from "react";

import { CarContext } from '../CarContext/CarContext';
import { useNavigate } from 'react-router-dom';

function CarItem({car}) {
    const {setCurrentCar,setCarList } = useContext(CarContext);
    const navigate = useNavigate();
   

    // seçilen arabanın görüntülenme sayısını bir arttırıp detayına yönlendiren fonksiyon
    function selectCarHandler() {
        setCurrentCar(car);
        navigate('/details');

        setCarList((prev) => prev.map((item) => {

            if (item.id=== car.id) {
              item.view = item.view+1
            }
        
           return item 
        }
        ))
      }
      
  return (
    <div style={{ position: "relative" }}>
    <img
      className="carImage"
      style={{
        width: "289px",
        height: "210px",
        borderRadius: 8,
        margin: "0px",
        marginTop: 15,
        marginBottom: 5,
        boxShadow: "0px 0px 20px -3px rgba(255,255,255,0.84)",
      }}
      src={car.file}
      onClick={selectCarHandler}

    ></img>
    <div
      style={{
        background: "white",
        position: "absolute",
        right: "1.5em",
        bottom: "1em",
        borderRadius: 10,
        boxShadow: "0px 0px 18px 1px rgba(0,0,0,0.98)",
      }}
    >
      <h5 style={{ padding: "1px", fontSize: 10}}>{car.price}₺</h5>
    </div>

    <div
      style={{
        position: "absolute",
        left: "1em",
        bottom: "1em",
      }}
    ></div>
  </div>
  )
}

export default CarItem