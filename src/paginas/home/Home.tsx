import './Home.css'

/*interface minhaProps {
    title: string;
    description: string;
  }
  
function Home(props:minhaProps){
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </>
    );
}

export default Home;*/
/*function Home() {
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');
  
    useEffect(() => {
      if (completed) {
        setTarefa('Parabéns! Você concluiu a tarefa!');
      }
    }, [completed]);
  
    return (
      <div>
        <h1>Tarefa</h1>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa</p>
        <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
      </div>
    );
  }
  
  export default Home;*/

  import React, { useState } from 'react';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )}
    </div>
  );
}
export default Home;