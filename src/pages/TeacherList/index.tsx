import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/teacherItem';
import Input from '../../components/input';

import './styles.css'


function TeacherList(){
    return(
        <div  id="page-teacher-list"className="container">
            <PageHeader title="Estes são os professores disponíveis">
                <form id="search-teachers">
                   <Input name="subject" label="Materia"/>
                   <Input name="week_day" label="Dia da seman"/>
                   <Input type="time" name="time" label="hora"/>
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
        
            </main>
        </div >
    ) 
}
export default TeacherList