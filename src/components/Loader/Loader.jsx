import { Oval } from  'react-loader-spinner'
import { Spinner } from './Loader.styled';

export default function  Loader(){
    return(
        <Spinner>
            <Oval
            height = "72"
            width = "72"
            secondaryColor = "#d1d1d1"
            color = '#b0b0b0'
            />
        </Spinner>
    )
}
