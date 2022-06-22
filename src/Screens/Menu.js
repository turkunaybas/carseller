import React, { useEffect, useState, useContext } from "react";
import CarItem from '../Components/CarItem';
import { Container, } from "semantic-ui-react";
import { CarContext } from '../CarContext/CarContext';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Menu() {
    const { carList } = useContext(CarContext);
    const [carListt, setCarListt] = useState([]);
    const [color, setColor] = useState("");
    const [model, setModel] = useState("");


    // select içinde seçim yaptığım her defada renk ve marka değişimine göre araba listemi güncelleyen fonks
    useEffect(() => {

        let carListe = carList.filter((x) => x.brand.includes(model) && x.color.includes(color));
        setCarListt(carListe);
        console.log(carListt, "yeni")
    }, [color, model])



  

    return (
        <div style={{ backgroundColor: "#1A1A1D", height: 1000, paddingTop: 10, flexDirection: "row", display: "flex" }} >
            <div style={{ height: 750, width: 160, marginRight: "7%", marginLeft: "5%" }}>
                <Box sx={{ minWidth: 120, backgroundColor: "#C3073F", }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Renk</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Renk"
                            onChange={(event) => setColor(event.target.value)}
                        >
                            <MenuItem value={""}>Tümü</MenuItem>
                            <MenuItem value={"Pembe"}>Pembe</MenuItem>
                            <MenuItem value={"Pembe"}>Kırmızı</MenuItem>
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
                <Box sx={{ minWidth: 120, backgroundColor: "#C3073F;" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Marka</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Marka"
                            onChange={(event) => setModel(event.target.value)}
                        >
                            <MenuItem value={""}>Tümü</MenuItem>
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
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 7 }}>
                {carListt.map((car) => (
                    <Grid item xs={2} sm={4} md={2} key={car.id}>
                        <CarItem key={car.id} car={car} ></CarItem>
                    </Grid>
                ))}
            </Grid>



        </div>

    )
}

export default Menu