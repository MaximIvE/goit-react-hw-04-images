import { ButtonLoadMore,WrapperBtn } from './Button.styled';

export default function Button({loadMore}){
    return (
        <WrapperBtn>
        <ButtonLoadMore
        type='button'
        onClick={loadMore}
        >Load more</ButtonLoadMore>
        </WrapperBtn>
    )
}