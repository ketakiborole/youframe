import React ,{useState,useEffect} from 'react';
//import ReactDOM from 'react-dom';
import uploadIcon from './uploadIcon.svg';
import axios from 'axios';

function Upload(){
    const[images,setImages]= useState([]);

    const uploadImage=(e)=>{
        let file=e.target.files[0];
        if(file){
            console.log(file)
            let reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function(){
                let imgData = {
                    Name:file.name,
                    Image:reader.result
                }
                const uploadRequest = {
                    UploadRequest:imgData
                }
                
                axios.post(`http://localhost:3001/upload`,uploadRequest)
                .then(res => {
                    images.unshift(imgData);
                    setImages([...images]);
                    console.log("uploaded succesfully")
                })
                .catch(err=>{
                    if(err && err.response && err.response.status === 400){
                        alert(err.response.data.message);
                    }
                })
            }
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/images`)
        .then(res => {
            let imgArr = res.data
            setImages(imgArr);
        })
    },[true])
        return(
            <div >
                <div className="my-10">
                    <input type="file" id="file" accept="image/*" className="upload" onChange={(e)=>uploadImage(e)}></input>
                    <label className="uploadLabel" for="file">
                    <img className="icon" src={uploadIcon}></img>
                    Upload
                    </label>
                </div>
                <div className="flex flex-col md:flex-wrap md:flex-row md:mx-40 mx-5">
                    {images && images.map((item)=>(
                        <div key={item.Name} className="upload-image rounded-md ">
                            <img id={item.Name} className="preview-image" src={item.Image} alt=" "></img>
                            <p className="mt-0 text-regular-blue leading-6 font-normal">{item.Name}</p>
                        </div>
                    ))}
                     
                   
                </div>
                
                
            </div>
                 
            
        )
    
}
export default Upload;