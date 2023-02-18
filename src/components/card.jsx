import Footer from "../Footer";
import {HiMail} from "react-icons/hi"
import * as React from 'react';
import {MdOutlineExpandMore} from 'react-icons/md'
import {MdOutlineExpandLess} from 'react-icons/md'
const Mojtaba = {
  Name : 'Mojtaba Bagheri Chenari',
  Job : 'Front-end WebDeveloper',
  Email : 'mojtaba.bagherich@gmail.com',
  About : 'I am a developer with a particular interest in making things simple and automating daily tasks. i was born in 1998 & I try to keep up with data science and best practices, and am always looking for new things to learn. i have some expriences in data related jobs with several data science certificates from IBM and for my projects you can visit my github',
  Intrests : 'Food expert. Basketball player. Reader. Internet fanatic. Travel geek. Coffee fanatic. Football. surfing the internet. Taking a walk.',
  Studies:'Currently studying computer science in azad islamic University Guilan',
  LanguageKnowledge :'- German \n- English \n- Farsi ( Mother Language)',
  cert:'- Data Science Methodology\n- Tools for Data Science\n- Python for Data Science & AI developing\n- Databases und SQL for Data Science with Python',

};

function Card() {
  const[more, setMore] = React.useState(false)
  function flipper(){
    return(
      setMore(more => !more)
    )
  }
  return (
    <div className="info-box">
      <img className='Pp' src='/image/Screen Shot 1400-09-28 at 20.15.36.jpg' alt="profile"/>
      <pre className='Name'>{Mojtaba.Name}</pre>
      <h2 className='Job'>{Mojtaba.Job}</h2>
      <div className='btn'>
          <a href="mailto:mojtaba.bagherich@gmail.com?body=My custom mail body" style={{ textDecoration: 'none' }}color='black'>
          <button id='Email'>Email<HiMail className="icon"/></button>
          </a>
      </div>
      <div>
        <header className='header'>About</header>
          <p className='about'>{Mojtaba.About}</p>
      </div>
      {more ===true && 
        <div className="moreInformation">
          <div>
        <header className='header'>Intrests</header>
        <p className='about'>{Mojtaba.Intrests}</p>
      </div>
      <div>
        <header className='header'>Studies</header>
          <p className='about'>{Mojtaba.Studies}</p>
      </div>
      <div>
        <header className='header'>Languages</header>
          <pre className='about' >{Mojtaba.LanguageKnowledge}</pre>
      </div>
      
      <div>
        <header className='header'>Certificates</header>
          <pre className='about'>{Mojtaba.cert}</pre>
      </div>
      </div>  
      }
      {more === false ? <MdOutlineExpandMore className="more-btn" onClick={flipper}/> : <MdOutlineExpandLess className="more-btn" onClick={flipper}/>}
      
      <Footer/>
    </div>
    
  );
}

export default Card;
