import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const a = (cl) => document.querySelector(cl)

  const [segundo, setSegundo] = useState(0)
  const [minute, setMinuto] = useState(0)
  const [startCheck, setStartCheck] = useState(0)

  useEffect(() => {
    if(startCheck > 0) {
      let timer = setInterval(() => {
        setSegundo( segundo + 1 )
      }, 1000)
      if(segundo === 10) {
        a('.seconds').style.display = 'none'
      } else if(segundo === 60) {
        setMinuto( minute + 1 )
        setSegundo( segundo - 60 )
        a('.minute').innerHTML = minute + 1
        a('.seconds').style.display = 'block'
      } else if(minute === 10) {
        a('.minutes').style.display = 'none'
      }
      return () => clearInterval(timer)
    }
  }, [segundo, minute, startCheck])

  const start = () => {
    if(a('.button-start-stop').innerHTML === 'INICIAR') {
      setStartCheck( startCheck + 1 )
      a('.button-start-stop').innerHTML = 'PAUSAR'
    } else if(a('.button-start-stop').innerHTML === 'PAUSAR') {
      setStartCheck( startCheck - 1 )
      a('.button-start-stop').innerHTML = 'CONTINUAR'
    } else if(a('.button-start-stop').innerHTML === 'CONTINUAR') {
      setStartCheck( startCheck + 1 )
      a('.button-start-stop').innerHTML = 'PAUSAR'
    }
  }

  const reload = () => {
    if(startCheck === 1) {
      setStartCheck( startCheck - 1 )
    }

    setSegundo( 0 )
    setMinuto( 0 )

    a('.minutes').style.display = 'block'
    a('.seconds').style.display = 'block'
    a('.button-start-stop').innerHTML = 'INICIAR'
  }

  return (
    <div className="App">
      <div className='minutes'>0</div>
      <div className='minute'>{minute}</div>
      <div>:</div>
      <div className='seconds'>0</div>
      <div className='second'>{segundo}</div>
      <button className='button-start-stop' onClick={start}>INICIAR</button>
      <button className='reload' onClick={reload}>REINICIAR</button>
    </div>
  );
}

export default App;

















/*import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const a = (cl) => document.querySelector(cl)

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  }, [name, lastName])

  const handleNameChange = (e) => {
    setName( e.target.value )
  }

  const handleLastNameChange = (e) => {
    setLastName( e.target.value )
  }

  return (
    <div className="App">
      <input className='input1' type="text" placeholder='PRIMEIRO NOME' value={name} onChange={handleNameChange}/>
      <input className='input1' type="text" placeholder='SOBRENOME' value={lastName} onChange={handleLastNameChange}/>
      <h1>{fullName}</h1>
    </div>
  );
}

export default App;*/
