import { Gallery } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";
import PropTypes from 'prop-types';


export default function ImageGallery({reply, onModal}){

return (
    <Gallery>
        {reply
        .map(({id, webformatURL, largeImageURL, tags})=>{
            return <ImageGalleryItem 
                        key ={id} 
                        onModal={onModal} 
                        src={webformatURL} 
                        dataSource={largeImageURL} 
                        alt={tags}
                    />
            })
        }
    </Gallery>
)
};

ImageGallery.propTypes = {
    reply: PropTypes.arrayOf(PropTypes.object).isRequired,
    onModal: PropTypes.func.isRequired,
};