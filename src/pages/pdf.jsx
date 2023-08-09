import React from 'react';
import {MdSimCardDownload} from "react-icons/md"

function PDFPreview() {
  return (
    <div>
      <p className='flex flex-col gap-2 mb-3'>
        <h1 className='head text-blue-400 px-3 '>to Downoad the pdf version click the button below</h1>
        <a href="/image/ResumeEnglish.pdf" className='download hover:text-white border-1 rounded-full p-2' download><MdSimCardDownload className= 'downloadBtn text-white scale-150 animate-pulse'/></a>
      </p>
    </div>
  );
}



export default PDFPreview;
