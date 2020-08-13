import React, { useState,useEffect } from 'react';
import Logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import study from '../../assets/images/icons/study.svg';
import give from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

function Landing (){
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(()=>{
    api.get('connections').then(response =>{
      const {total} = response.data;

      setTotalConnections(total)
    })
  })

    return(
      <div id="page-landing">
          <div className="container" id="page-landing-content">
              <div className="logo-container">
                <img src={Logo} alt="logo"/>
                <h2>Sua plataforma de estudos online.</h2>
              </div>
              <img src={landing} 
              alt="Plataforma de estudos" 
              className="hero-image"
              />
              <div className="buttons-container">
                  <Link to="/study" className="study">
                    <img src={study} alt="estudar"/>
                    Estudar
                  </Link>
                  <Link to ="/give-classes" className="give-classes">
                    <img src={give} alt="estudar"/>
                    Dar aulas
                  </Link>
              </div>
              <span className="total-connections">
                  Total de {totalConnections} conexões ja realizadas <img src={purpleHeart} alt="Coração roxo"/>
              </span>
          </div>

      </div>
    )
    
}
export default Landing;
