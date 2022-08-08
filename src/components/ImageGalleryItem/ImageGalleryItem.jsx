import { Item, Img } from './ImageGalleryItem.styled';

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
}