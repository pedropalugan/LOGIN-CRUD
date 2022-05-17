import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import login from '../../assets/img/astro.svg'
import './style.css';
import { Button } from 'react-bootstrap';
import Axios from "axios";


function Componentee() {
 


  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: email,
      password: password,
     
    }).then((response) => {
      console.log(email)
      alert(response.data.msg);
      console.log(response);
    });
  };
  
  
  
  return (
     
          <div className="container-login">
            <div className="content-box">
                <div className="form-box">
                    <h2>Cadastro</h2>
                    <form>
                        <div className="input-box">
                            <span>Username</span>
                            <input type="email" className='reste' placeholder="Informe seu email" onChange={e => setEmail(e.target.value)}/>
                            <div className="mb-3">
                        </div>
                        </div>

                        <div className="input-box">
                            <span>Password</span>
                            <input type="password" placeholder="Informe sua senha" onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className="input-box">
                          <Button onClick={handleRegister}>Cadastrar</Button>
                        </div>

                        <div className="input-box">
                          <p>Tem Uma Conta? <Link to="/">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="img-box">
              <img src={login} alt="teste"/>
            </div>
        </div>
    
    )
  }


export default Componentee;