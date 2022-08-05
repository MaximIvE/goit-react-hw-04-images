import { Component } from "react";
import { Header,Form,SearchFormBtn,SpanBtn,Input } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export default class Searchbar extends Component{

    passValue=(e)=>{
        e.preventDefault();
        console.log('Спрацював сабміт форми');
        this.props.onSubmit(e.target[1].value)
    }

    render(){
        return (
        <Header>
            <Form onSubmit={this.passValue}>
                <SearchFormBtn type="submit">
                <SpanBtn>Search</SpanBtn>
                </SearchFormBtn>

                <Input
                type="text"
                autocomplete="off"
                focus='true'
                placeholder="Search images and photos"
                />
            </Form>
        </Header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}