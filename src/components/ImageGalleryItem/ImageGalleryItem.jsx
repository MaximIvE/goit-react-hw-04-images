import { Item, Img } from './ImageGalleryItem.styled';

export default function ImageGalleryItem(props){
    const {src, alt}=props;
    return (
        <Item >
            <Img src={src} alt={alt} />
        </Item>
    )
}
