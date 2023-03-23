
Para entrar na pasta do projeto:

cd rocketseatReact


Para rodar o projeto localmente:

npm run dev


Observações:

function handleNameChange(nome) {
  console.log(nome)
  //função onChange mostra qdo há mudanças de estado. vamos aqui pegar o valor fo input
}

< input
       type="text" 
       placeholder='Digite seu nome'
       onChange={e => handleNameChange(e.target.value)} 
 />