import {HiMail} from "react-icons/hi"
import * as React from 'react';
import {MdOutlineExpandMore} from 'react-icons/md'
import {MdOutlineExpandLess} from 'react-icons/md'
import Navbar from "./navbar";
const Mojtaba = {
  Name : 'Mojtaba Bagheri Chenari',
  Job : 'Front-end WebDeveloper',
  Email : 'mojtaba.bagherich@gmail.com',
  LanguageKnowledge :'- German \n- English \n- Farsi ( Mother Language)',
};

function Card() {
  const[more, setMore] = React.useState(false)
  function flipper(){
    return(
      setMore(more => !more)
    )
  }
  return (
    <div className="App">
      <img className='Pp' src='/image/Screen Shot 1400-09-28 at 20.15.36.jpg' alt="profile"/>
      <pre className='Name'>{Mojtaba.Name}</pre>
      <h2 className='Job'>{Mojtaba.Job}</h2>
      <div className='btn'>
          <a href="mailto:mojtaba.bagherich@gmail.com?body=My custom mail body" style={{ textDecoration: 'none' }}color='black'>
          <button id='Email'>Email<HiMail className="icon"/></button>
          </a>
      </div>
      
      <div className="info-part">
      </div>
      {more ===true && 
        <div className="moreInformation">Ladies and Gentlemen
        Are you looking for a constructive and trusting trainee in the IT sector, preferably as a data analyst, who has a great affinity for computer science and mathematics and already has many years of experience in the IT sector? Then we should get to know each other personally.
        For many years I have been able to independently gain experience in a wide range of IT areas at various companies. I can also fall back on studying computer science in my home country. I am convinced that my professional experience is an ideal prerequisite for an apprenticeship with you and I would very much like to contribute my knowledge and my commitment to the IT area in your company.
        I am resilient, I work with the necessary conscientiousness, perseverance and empathy. My perseverance, my strong will and my flexibility complete my overall package.
        I am currently working intensively on expanding my German and English language skills in order to quickly gain a foothold in my new home country
        Therefore, I see myself capable of successfully completing this demanding training in a future-oriented company like yours.
        
        Have I piqued your interest? I would be happy to introduce myself to you personally in an interview.
        Best regards</div>  
      
}
      {more === false ? <MdOutlineExpandMore className="more-btn" onClick={flipper}/> : <MdOutlineExpandLess className="more-btn" onClick={flipper}/>}
      <Navbar/>
    </div>

    
  );
}

export default Card;
