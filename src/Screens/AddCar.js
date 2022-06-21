
import React, { useEffect, useState ,useContext} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Icon } from "semantic-ui-react";
import { CarContext } from '../CarContext/CarContext';
import { useNavigate } from 'react-router-dom';



function AddCar() {
    const { selected, carList, setCarList } = useContext(CarContext);
    const navigate = useNavigate();
    const [next, setNext] = useState(false)
    const [color, setColor] = useState(null);
    const [brand, setBrand] = useState(null);
    const [year, setYear] = useState(0);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [mail, setMail] = useState(selected.mail)



    const Save = () => {
        if (!year || !price || !description || !color || !brand|| !file) {
            alert("Boş Alanları Doldurunuz")
        } 
        else {
            setCarList([...carList, {brand,color,year,description,price,file,mail}]);
            navigate('/')
        

        }
        
       

        console.log(carList, "kayıtlarr")

    };

    function handleImagePreview(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  

    function nextHandler() {
        if (!year || !price || !description || !color || !brand) {
            alert("Boş alanları doldurunuz")
        }
        else {
          
            setNext(true)

        }
    }
    return (
        <div style={{ marginLeft: "auto", marginRight: "auto", backgroundColor: "#1A1A1D", height: 1000, paddingTop: 10, justifyContent: "center", display: "flex" }}>

            <div className="addCarPage">
                <h3 style={{ fontSize: 22, color: "white", marginLeft: "4%" }}>Yeni Araba Ekle</h3>
                <div style={{ padding: 50 }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        {!next && <h4
                            style={{
                                textAlign: "left",
                                fontSize: 20,
                                color: "white",

                            }}
                        >
                            <Box sx={{ minWidth: 120, backgroundColor: "#C3073F", borderRadius: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Renk</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={color}
                                        label="Renk"
                                        onChange={e => setColor(e.target.value)}

                                    >
                                        <MenuItem value={"Pembe"}>Pembe</MenuItem>
                                        <MenuItem value={"Beyaz"}>Beyaz</MenuItem>
                                        <MenuItem value={"Yeşil"}>Yeşil</MenuItem>
                                        <MenuItem value={"Siyah"}>Siyah</MenuItem>
                                        <MenuItem value={"Siyah"}>Siyah</MenuItem>
                                        <MenuItem value={"Mavi"}>Mavi</MenuItem>
                                        <MenuItem value={"Gri"}>Gri</MenuItem>
                                        <MenuItem value={"Mor"}>Mor</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </h4>}
                        {!next && <h4
                            style={{
                                textAlign: "left",
                                fontSize: 20,
                                color: "white",

                            }}
                        >
                            <Box sx={{ minWidth: 120, backgroundColor: "#C3073F", borderRadius: 2, }}>
                                <FormControl fullWidth>
                                    <InputLabel color="primary" id="demo-simple-select-label">Marka</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Marka"
                                        value={brand}
                                        onChange={e => setBrand(e.target.value)}

                                    >
                                        <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
                                        <MenuItem value={"Audi"}>Auidi</MenuItem>
                                        <MenuItem value={"Kia"}>Kia</MenuItem>
                                        <MenuItem value={"Opel"}>Opel</MenuItem>
                                        <MenuItem value={"Peugeot"}>Peugeot</MenuItem>
                                        <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
                                        <MenuItem value={"Jeep"}>Jeep</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </h4>}
                    </div>

                    {!next && <input
                        style={{
                            borderRadius: "5px",
                            width: "100%",
                            height: "3em",
                            padding: 25,
                            letterSpacing: 2,
                            fontWeight: "bold",
                            marginTop: "2em",
                        }}
                        placeholder="Araç Senesi"
                        onChange={(e) => setYear(e.target.value)}
                    ></input>}

                    {!next && <input
                        style={{
                            borderRadius: "5px",
                            width: "100%",
                            height: "2em",
                            padding: 25,
                            letterSpacing: 2,
                            fontWeight: "bold",
                            marginTop: "2em",
                        }}
                        placeholder="Açıklama"
                        onChange={(e) => setDescription(e.target.value)}
                    ></input>}

                    {!next && <input
                        style={{
                            borderRadius: "5px",
                            width: "100%",
                            height: "2em",
                            padding: 25,
                            letterSpacing: 2,
                            fontWeight: "bold",
                            marginTop: "2em",
                        }}
                        placeholder="Fiyat"
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                    }

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 40 }}>
                        {next && <div><label for="file-upload" class="custom-file-upload customizedButton">
                            <Icon name="upload"></Icon> Görsel Yükle
                        </label>
                            <input onChange={handleImagePreview} id="file-upload" type="file" /></div>}

                        {!next ? <button onClick={nextHandler} className="nextButton customizedButton">
                            Devam Et <Icon name="right arrow"></Icon>
                        </button> : <button  onClick={Save} className="nextButton customizedButton">
                            <Icon name="add"></Icon> Araba Ekle
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCar