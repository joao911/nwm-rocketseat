import React from 'react'
import PageHeader from '../../components/PageHeader'
import Warning from '../../assets/images/icons/warning.svg'
import Input from '../../components/input';

import './styles.css'

function TeacherForm(){
    return(
        <div  id="page-teacher-form"className="container">
            <PageHeader
                title="Que incrével que você quer dar aulas" 
                description="O primeiro passo é preencher esse formulário de incrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="Nome completo" label="name"/>
                    <Input name="Avatar" label="avatar"/>
                    <Input name="WhatsApp" label="whatsapp"/>
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Input name="Subject" label="Matéria"/>
                    <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>
                <footer>
                    <p>
                        <img src={Warning} alt="aviso importante"/>
                        Importante <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    )
}
export default TeacherForm;