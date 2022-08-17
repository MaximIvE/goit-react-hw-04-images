import {Wrapper, Image} from './Error.styled';
import imageError from '../../img/Error.png';
import defaultImg from '../../img/defaultImg.png';
import Loader from 'components/Loader';

export default function  PreventionError({message, children, query}){
    
    if (!message) {return children};

    function markupError (img, text){
        const bgClr = img === defaultImg ? '#e9eef1' : "rgb(239, 251, 255)";
        return (
            <Wrapper style={{backgroundColor: bgClr}}>
                <h2>{text}</h2>
                <Image src={img}/>
            </Wrapper>);
    }

    if(message.includes(query)){
        return markupError(defaultImg, `Пo запиту  ${query}  нічого не знайдено`)
    };

    if(message.includes("Other")){
        return markupError(imageError, 'Oops, failed to draw pictures')
    };

    return <Loader/>;
}