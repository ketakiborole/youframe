import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import image1 from './image1.jpg'
function Image(){
    
        return(
            <div className="flex flex-col md:flex-row md:mx-40  mx-5">
                <div className="preview-image rounded-md ">
                    <img id="image1.jpg" className="rounded-t-md w-full " src={image1} alt=" "></img>
                    <p className="mt-0 text-regular-blue leading-6 font-normal">Image1</p>
                </div>
                <div className="preview-image rounded-md ">
                    <img id="image1.jpg" className="rounded-t-md w-full" src={image1} alt=" "></img>
                    <p className="mt-0 text-regular-blue leading-6 font-normal">Image1</p>
                </div>
                <div className="preview-image rounded-md ">
                    <img id="image1.jpg" className="rounded-t-md w-full" src={image1} alt=" "></img>
                    <p className="mt-0 text-regular-blue leading-6 font-normal">Image1</p>
                </div>
            </div>
        )
    

}
export default Image;