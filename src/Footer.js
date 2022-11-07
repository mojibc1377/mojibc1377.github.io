import * as React from 'react';
export default function Footer(){
    return(
        <div>
            <footer className='footer'>
                <a href="https://www.github.com/mojibc1377"> <img className='git' src={require('./image/icons8-github-60.png')}></img></a>
                <a href="https://www.facebook.com"> <img className='facebook' src={require('./image/icons8-facebook-48.png')}></img></a>
                <a href="https://www.instagram.com/bagheric.mojtaba"> <img className='instagram' src={require('./image/icons8-instagram-48.png')}></img></a>
            </footer>
        </div>
    );
}