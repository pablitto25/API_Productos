import React, { useState } from 'react';
import axios from 'axios';
import {redirect} from 'react-router-dom'; 


  const URI = process.env.REACT_APP_API_IMG_URL;
  const URL_UPLOAD = process.env.REACT_APP_API_IMG_UPLOAD;


    const CompUploadImg = ()=>{
    // eslint-disable-next-line
    const [media_img_url, setImgUrl] = useState(''); 
    const [media_vid_url, setVideoUrl] = useState('vacio');
    // eslint-disable-next-line
    const [media_name, setImgName] = useState(''); 
    const [media_alt, setMediaAlt] = useState('');
    // eslint-disable-next-line
    const [media_type, setMediaType] = useState('');


    const [file, setFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("");
    
    const handleFileInputChange = (event) => {
      const file = event.target.files[0];
      setFile(file);

      setSelectedFileName(file ? file.name : "");
    };

    /* const navigate = useNavigate(); */

    //Procedimiento para guardar en db
    const store = async(e) =>{
        e.preventDefault();
        axios.post(URI, {media_img_url: process.env.REACT_APP_API_RUTA_IMG+selectedFileName,
                         media_vid_url: media_vid_url,
                         media_name: selectedFileName,
                         media_alt: media_alt,
                         media_type: selectedFileName.split('.').pop()});

        const formData = new FormData();
        formData.append('file', file);
        const response = await axios.post(URL_UPLOAD, formData);
        console.log(response.data);                 
        redirect('/admin/media'); 
    }

  return (
    

<div>
<h3>Upload Images</h3>
<form onSubmit={store}>
    <div className='mb-3'>
        <label className='form-label'>Img URL</label>
        <input
            value={process.env.REACT_APP_API_RUTA_IMG+selectedFileName}
            onChange={(e) => setImgUrl(e.target.value)}
            type="text"
            className='form-control'/>
    </div>
    <div className='mb-3'>
        <label className='form-label'>Video URL</label>
        <input
            value={media_vid_url}
            onChange={(e) => setVideoUrl(e.target.value)}
            type="text"
            className='form-control' />
    </div>
    <div className='mb-3'>
        <label className='form-label'>Img Name</label>
        <input
            value={selectedFileName}
            onChange={(e) => setImgName(e.target.value)}
            type="text"
            className='form-control' />
    </div>
    <div className='mb-3'>
        <label className='form-label'>Alt</label>
        <input
            value={media_alt}
            onChange={(e) => setMediaAlt(e.target.value)}
            type="text"
            className='form-control' />
    </div>
    <div className='mb-3'>
        <label className='form-label'>Image Type</label>
        <input
            value={selectedFileName.split('.').pop()}
            onChange={(e) => setMediaType(e.target.value)}
            type="text"
            className='form-control' />
    </div>
  
        <input type="file" onChange={handleFileInputChange}/>
        
    <button type='submit' className='btn btn-primary'>Save</button>
</form>
</div>

  );
}

export default CompUploadImg;