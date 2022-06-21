import './App.css';
import React, { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Login from './Screens/Login';
import Main from './Screens/Main';
import Menu from './Screens/Menu';
import { CarContext } from './CarContext/CarContext';
import FilterBar from './Components/FilterBar';
import AddCar from './Screens/AddCar';
import CarDetail from './Screens/CarDetail';
import SignUp from './Screens/SignUp';






const App = () => {


  let routes = useRoutes([

    { path: "/", element: <Menu /> },
    { path: "signin", element: <Login /> },
    { path: "addcar", element: <AddCar /> },
    { path: "details", element: <CarDetail /> },
    { path: "signup", element: <SignUp /> },

  ]);
  return routes;

};

const AppWrapper = () => {
  const [pageState, setPageState] = useState("main");
  const [carList, setCarList] = useState([
    {
      id: 1,
      model: "Cla 180D",
      year: "2015",
      price: "1001000",
      color: "Beyaz",
      brand: "Mercedes",
      mail: "veli@gmail.com",
      description: "ARACIM İÇİ DISI SIFIRDAN FARKSIZDIR EZİK ÇİZİK NOKTA GAMZE DAHİ YOKTUR YEDEK ANAHTAR VE KİTAPÇIĞI VARDIR ",
      file: "https://i0.shbdn.com/photos/36/61/84/x5_893366184hgz.jpg",
      view:0
    },
    {
      id: 2,
      model: "A3 Sportback",
      label: "Kusursuz Kırmızı Audi",
      year: "6786",
      price: "1001000",
      color: "Kırmızı",
      type: "sedan",
      brand: "Audi",
      owner: "Ali Duru",
      mail: "ali@gmail.com",
      description: "Sıfırı yakın boyasızı yok, orijinal parçalar",
      file: "https://cdn.motor1.com/images/mgl/7MK77/s3/audi-a3-sportback-2020-im-test.jpg",
      view:0
    },
    {
      id: 3,
      model: " Sportif",
      label: "Son Fiyat Jeep",
      year: "2002",
      price: "700000",
      color: "Siyah",
      type: "sedan",
      brand: "Jeep",
      owner: "Ayşe Koç",
      mail: "ayse@gmail.com",
      description: "Sağ kapı  hasarlı , İçi çok temiz ",
      file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQff4khBlHTr_m1fdaLzCRmmKeBPgMajFVI1Q&usqp=CAU",
      view:0
    },
    {
      id: 4,
      model: "Passat",
      label: "Passat Sıfır Ayarında",
      year: "2021",
      price: "730000",
      color: "Gri",
      type: "sedan",
      brand: "Volkswagen",
      owner: "Elif Su",
      mail: "elif@gmail.com",
      description: "SIFIR AYARINDA",
      file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScT8moMMJ2On8KAR8KirkQ4ttMaNueiW5dUg&usqp=CAU",
      view:0
    },
    {
      id: 12,
      model: "Passat",
      label: "Passat Sıfır Ayarında",
      year: "2021",
      price: "730000",
      color: "Gri",
      type: "sedan",
      brand: "Volkswagen",
      owner: "Elif Su",
      mail: "elif@gmail.com",
      description: "SIFIR AYARINDA",
      file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScT8moMMJ2On8KAR8KirkQ4ttMaNueiW5dUg&usqp=CAU",
      view:0
    },
    {
      id: 41,
      model: "Passat",
      label: "Passat Sıfır Ayarında",
      year: "2021",
      price: "730000",
      color: "Gri",
      type: "sedan",
      brand: "Volkswagen",
      owner: "Elif Su",
      mail: "elif@gmail.com",
      description: "SIFIR AYARINDA",
      file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScT8moMMJ2On8KAR8KirkQ4ttMaNueiW5dUg&usqp=CAU",
      view:0
    },
    {
      id: 44,
      model: "Passat",
      label: "Passat Sıfır Ayarında",
      year: "2021",
      price: "730000",
      color: "Gri",
      type: "sedan",
      brand: "Volkswagen",
      owner: "Elif Su",
      mail: "elif@gmail.com",
      description: "SIFIR AYARINDA",
      file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScT8moMMJ2On8KAR8KirkQ4ttMaNueiW5dUg&usqp=CAU",
      view:0
    }
    , {
      id: 42,
      model: "Passat",
      label: "Passat Sıfır Ayarında",
      year: "2021",
      price: "730000",
      color: "Gri",
      type: "sedan",
      brand: "Volkswagen",
      owner: "Elif Su",
      mail: "elif@gmail.com",
      description: "SIFIR AYARINDA",
      file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScT8moMMJ2On8KAR8KirkQ4ttMaNueiW5dUg&usqp=CAU",
      view:0
    }

  ]);
  const [userList, setUserList] = useState([

    { mail: "mail@gmail.com", password: "123", name: "ali", },
    { mail: "ikinci@gmail.com", password: "123", name: "veli" },
    { mail: "ucuncu@gmail.com", password: "123", name: "ayşe" }
  ]);
  const [selected, setSelected] = useState("");
  const [user, setUser] = useState({ mail: "", password: "" });
  const [currentCar, setCurrentCar] = useState({});
  return (

    <Router>
      <CarContext.Provider value={{
        userList, setPageState, setSelected, pageState, selected, user, setUser,
        carList, setCarList, setUserList, setCurrentCar, currentCar
      }} >
        <Main> </Main>
        <App />
      </CarContext.Provider>

    </Router>
  );
};

export default AppWrapper;


