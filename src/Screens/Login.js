import React, { useContext, useState } from "react";
import { CarContext } from '../CarContext/CarContext';
import { useNavigate } from 'react-router-dom';
function Login() {



  const [error, setError] = useState("");
  const [details, setDetails] = useState({ mail: "", password: "" });

  const { userList, setSelected, setUser, selected } = useContext(CarContext);
  const navigate = useNavigate();

  // login fonks ile kullanıcı listemin içinden ekrandan girdiğim bilgilere uyan kişiyi bulup giriş yapıyorum.
  // o kiş ile işlem yapacağım için selected içine setselected ile o kişinin bilgilerini kaydediyorum
  const Login = () => {
    console.log(details);
    let selected;
    selected = userList.find(item => item.mail === details.mail && item.password === details.password)
    setSelected(selected)
    if (selected) {
      setUser({
        mail: details.mail,
        password: details.password
      });
      navigate('/');


    } else {
      console.log("girmedi", selected)
      setError("BİLGİLER UYMADI")
    }
  }

  return (
    <div style={{ display: "flex", paddingTop: "3%", justifyContent: "center", backgroundColor: "#1A1A1D", height: 800 }}>
      <div className="signinpage">
        <div
          style={{
            background: "#C3073F",
            width: "100%",
            height: "5rem",
            borderRadius: "10px 10px 0px 0px",
            textAlign: "center",

          }}
        >
          <label style={{ fontSize: 30, }}>Giriş</label>
          {(error != "" ? (<div className='error'> {error} </div>) : "")}
        </div>
        <div style={{ padding: 50, paddingRight: "30%" }}>
          <h4 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
            E-posta
          </h4>
          <input
            autoComplete="false"
            autoCapitalize="false"
            onChange={e => setDetails({ ...details, mail: e.target.value })}
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
          <h4 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
            Şifre
          </h4>
          <input
            type="password"
            onChange={e => setDetails({ ...details, password: e.target.value })}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "1em",
              padding: 25,
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          ></input>

          <button onClick={Login} className="signinbutton">
            Giriş Yap
          </button>


        </div>
      </div>
    </div>
  )
}

export default Login