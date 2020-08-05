import React from 'react';
import Logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import study from '../../assets/images/icons/study.svg';
import give from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import {Link} from 'react-router-dom'
import './styles.css';
function Landing (){
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
                  Total de 200 conexões ja realizadas <img src={purpleHeart} alt="Coração roxo"/>
              </span>
          </div>

      </div>
    )
    
}
export default Landing;
