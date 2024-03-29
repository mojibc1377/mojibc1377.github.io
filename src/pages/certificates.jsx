import * as React from 'react';

export default function Certificates(){
    const [imagesLoaded, setImagesLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

    return(
        <div className='info-part'>
            
              <header className='header animate-pulse'>Database and Sql for Data science</header>
              <img src='/image/db-and-sql for ds.jpg' className={`cert-image ${imagesLoaded ? 'image-loaded ps-3 rounded-md' : 'loading-placeholder'}`} alt='db-sqlForDs'></img>
              
              <header className='header animate-pulse'>Data science methodology</header>
              <img src='/image/ds-methodology.jpg' className={`cert-image ${imagesLoaded ? 'image-loaded ps-3 rounded-md' : 'loading-placeholder'}`} alt='Data science methodology'></img>
              
              <header className='header animate-pulse'>Python for Data science and AI development</header>
              <img src='/image/python-for-ds-and-ai-development.jpg' className={`cert-image ${imagesLoaded ? 'image-loaded ps-3 rounded-md' : 'loading-placeholder'}`} alt='python-for-ds-and-ai-development'></img>
             
              <header className='header animate-pulse'>Tools for Data science</header>
              <img src='/image/tools-for-ds.jpg' className={`cert-image ${imagesLoaded ? 'image-loaded ps-3 rounded-md' : 'loading-placeholder'}`} alt='tools'></img>
        </div>
    )
}