import { useState } from "react";
import { Header,Form,SearchFormBtn,SpanBtn,Input } from "./Searchbar.styled";
import PropTypes from 'prop-types';

const Searchbar = (props) => {
    const [value, setValue] = useState(props.value);

    const onSubmitForm=(e)=>{
        e.preventDefault();
        props.onSubmit(e.target[1].value)
    };

    const onChange=(e)=>{
        const newValue = e.currentTarget.value;
        setValue(newValue);
    };

    return (
    <Header>
        <Form onSubmit={onSubmitForm}>
            <SearchFormBtn disabled={props.disable} type="submit">
            <SpanBtn>Search</SpanBtn>
            </SearchFormBtn>

            <Input onChange={onChange}
            data-input='input'
            type="text"
            autocomplete="off"
            focus='true'
            autoFocus
            disabled={props.disable}
            placeholder="Search images and photos"
            value={value}
            />
        </Form>
    </Header>
    )
};

export default Searchbar;

Searchbar.propTypes = {
    disable: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};