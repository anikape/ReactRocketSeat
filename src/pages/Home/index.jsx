import React, {useState, useEffect} from 'react'
import Cards from '../../components/Cards/'

import './home.css'


import '../../styles/global.css'

const Home = () => {

const [studentName, setstudentName] = useState('')
const [students, setStudents]= useState([]); //tem um array vazio para que possamos através do map no componente card adcionar dinamicamente as informações
const [user, setUser] = useState({name:'', avatar:''})
//função para add o estudante

function handleAddStudent(){
    const newStudent ={
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
      } ) //pegar a hora dinamicamente
    }

    //para atualizar o estudante. Preciso recuperar os nomes já existentes para pode add outro elemento a lista

    // setStudents([newStudent])assim eu adciono sobrescrevendo
    // ...prevState - deixa o estado anterior lá sem mudar

    setStudents(prevState => [...prevState, newStudent]);
   

}

//useEffect - inicia  automaticamente assim q os componentes forem renderizados. o que está entre colchetes significa que o useEfect depende dele pra renderizar. 

useEffect(() =>{
  fetch('https://api.github.com/users/anikape').then(Response =>Response.json()).then(data => {
    setUser({
      name: data.name,
      avatar: data.avatar_url,
    })
  })

}, [students]);

  return (
    <div className="container">
  <header>   
  <h1>Lista de Presença</h1>
   <div className="containerHeader">
    <strong>{user.name}</strong>
    <img src={user.avatar} alt="Foto da Logo do ReactJs"></img>
   
    </div>
    </header>
    
      
      <input
       type="text" 
       placeholder='Digite seu nome'
       onChange={e => setstudentName(e.target.value)} 
       />

       <button type="button"
            onClick={handleAddStudent}>
              Adicionar
              </button>
     
     {
        students.map(student =>
          <Cards 
          Key={student.time} //a chave é única. Recomendado usar a key qdo usar o map
          name={student.name}
          time={student.time} />
        )
     }

    </div>
  )
}

export default Home