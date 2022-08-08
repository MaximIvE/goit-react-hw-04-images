import { Component } from "react";
import { Header,Form,SearchFormBtn,SpanBtn,Input } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export default class Searchbar extends Component{
    state={
        value: '',
    }

    componentDidMount(){
        //Якщо ми нове value прокидуємо зверху в пропсі, то його потрібно записати в стейт
        if(this.state.value !== this.props){ 
            const value = this.props.value;
            this.setState({value});
        }
    }

    onSubmitForm=(e)=>{
        e.preventDefault();
        this.props.onSubmit(e.target[1].value)
    }

    onChange=(e)=>{
        const value = e.currentTarget.value;
        this.setState({value});
    }

    render(){
        return (
        <Header>
            <Form onSubmit={this.onSubmitForm}>
                <SearchFormBtn disabled={this.props.disable} type="submit">
                <SpanBtn>Search</SpanBtn>
                </SearchFormBtn>

                <Input onChange={this.onChange}
                data-input='input'
                type="text"
                autocomplete="off"
                focus='true'
                autoFocus
                disabled={this.props.disable}
                placeholder="Search images and photos"
                value={this.state.value}
                />
            </Form>
        </Header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}