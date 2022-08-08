import { Item, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export default function ImageGalleryItem(props){
    const {src, alt, dataSource, onModal}=props;
    return (
        <Item onClick={(e)=>{
            const image = e.currentTarget.children[0];
            onModal(<img alt={image.alt} src={image.dataset.source}/>)
            }}>
            <Img src={src} alt={alt} data-source={dataSource}/>
        </Item>
    )
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    dataSource: PropTypes.string.isRequired,
    onModal: PropTypes.func.isRequired,
};