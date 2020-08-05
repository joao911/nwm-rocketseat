import { rootCertificates } from "tls";

import React from 'react';
import whatsapp from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

// import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/49724031?s=400&u=44f72f50d74716c141048ac65ba5027c1621430d&v=4" alt="João Paulo"/>
                        <div>
                            <strong>João Paulo Duarte</strong>
                            <span>Quimica</span>
                        </div>
                    </header>
                    <p>Entusiasta das melhores tecnologias de Quimica avançada <br/> <br/>

                    Apaixonado por explodir coisas em laboratorio atravś de experiências</p>
                    <footer>
                        <p>Preço/hora
                            <strong>R$ 25,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsapp} alt="entrar em contato"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
  )
}

export default TeacherItem;