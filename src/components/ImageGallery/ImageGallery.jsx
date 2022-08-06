import { Component } from "react";
import { Gallery } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";

export default class ImageGallery extends Component{

    createGallery = () => {
        
    }
    
render(){
    console.log(this.props.reply);
    const images=this.props.reply;
    if (images.length === 0){return}

    return (
        <Gallery>
            {images.map(({id, webformatURL, largeImageURL})=>{return <ImageGalleryItem key ={id} src={webformatURL} alt={largeImageURL}/>})
            }

        </Gallery>
    )
};
}