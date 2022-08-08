import { ButtonLoadMore,WrapperBtn } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({loadMore}){
    return (
        <WrapperBtn>
        <ButtonLoadMore
        type='button'
        onClick={loadMore}
        >Load more</ButtonLoadMore>
        </WrapperBtn>
    )
};

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
};