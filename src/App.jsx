import './styles.css/corpo.css'
import imagem from './assets/imagem.png'

export function App() {
  

  return (
    <article  className="contenier">
      <div className='content'>
      
        
        <div className="entradas">
          <div className='logo'>
          <h1> Sua Logo </h1>
          <img src={imagem}  />
          </div>
          
          <input className='input' type="text"  name="usuario_nome" placeholder='Usuário'/>
          <input className='input' type="text"  name="usuario_senha" placeholder='Senha'/>
          <button>Entrar</button>
        </div>
        
      
      </div>
       
    </article>
  )
}


