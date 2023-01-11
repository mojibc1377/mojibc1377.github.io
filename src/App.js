import './App.css';
import Header from './Header';
import Footer from './Footer';
const Mojtaba = {
  Name : 'Mojtaba Bagheri Chenari',
  Job : 'Developer',
  Website : 'www.github.com/mojibc1377',
  Email : 'mojtaba.bagherich@gmail.com',
  About : 'I am a developer with a particular interest in making things simple and automating daily tasks. I try to keep up with data science and best practices, and am always looking for new things to learn.',
  Intrests : 'Food expert. Basketball player. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
};
function App() {
  return (
    <div className="info-box">
      <img className='Pp' src={require('./image/Screen Shot 1400-09-28 at 20.15.36.png')}/>
      <h1 className='Name'>{Mojtaba.Name}</h1>
      <h2 className='Job'>{Mojtaba.Job}</h2>
      <h3 className='WebSite'>{Mojtaba.Website}</h3>
      <div className='btn'>
        <button id='Email'>
          <a href="mailto:mojibc1377@gmail.com?body=My custom mail body" color='black'>E-Mail</a>
        </button>
        
      </div>
      <div>
        <header className='header'>About</header>
          <p className='about'>{Mojtaba.About}</p>
      </div>
      <div >
        <header className='header'>Intrests</header>
        <p className='about'>{Mojtaba.Intrests}</p>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
