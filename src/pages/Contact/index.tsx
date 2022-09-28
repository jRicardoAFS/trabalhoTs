import './style.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export const Contact = () => {

  return (
    <div id='tudo'>
      <h1 className='trabalhar'>Vamos trabalhar juntos.</h1>

      <div className='endereco'>
        <h2>Endereço</h2>
        <p>Francisco barros, 75-Redenção CE</p>
      </div>

      <div className='telefone'>
        <h2>Telefone</h2>
        <p>(85)99618-0591</p>
      </div>

      <div className='email'>
        <h2>E-mail</h2>
        <p>joaoricardoss.2005gmail.com</p>
      </div>

      <div className='icons'>
        <div className='jn'>
      <a href="https://www.youtube.com/watch?v=tl9WC-OPP18">Junte-se a nós</a>
        </div>

        <div className='git'>
          <a href="https://github.com/jRicardoAFS"> <AiFillGithub /></a>
        </div>

        <div className='insta'>
          <a href="https://www.instagram.com/joaoricardo____/?next=%2F"> <AiOutlineInstagram /></a>
        </div>
        
      </div>

    </div>
  )

}