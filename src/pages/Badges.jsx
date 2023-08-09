import * as React from 'react';

export default function Badges(){
    const [imagesLoaded, setImagesLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
    return(
        <div className='info-part'>
            
              <header className='header animate-pulse'>Data science orientation</header>
              <img src='/image/Data_Science_Orientation_Badge20210509-58-u17yiu.jpg' className={`cert-image ${imagesLoaded ? 'image-loaded ps-3' : 'loading-placeholder'}`} alt='ds-orientation'></img>
              
              <header className='header'>Tools for Data science</header>
              <img src='/image/Tools_for_Data_Science_Badge20210509-58-29jk1b.jpg' className={`cert-image ${imagesLoaded ? 'image-loaded ps-3' : 'loading-placeholder'}`} alt='Data science methodology'></img>
              
              
        </div>
    )
}