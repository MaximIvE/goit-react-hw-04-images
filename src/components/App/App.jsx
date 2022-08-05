import { Component } from 'react';
import { Contanier } from './App.styled';
import Searchbar from 'components/Searchbar/Searchbar';



export default class App extends Component{
state={
  searchQuery: '',
  
}

// цей метод визивається під час сабміту форми (натискання кнопки пошук)
onSubmit = (valueInput) => {
  
  this.setState({searchQuery: valueInput})
}

render(){
  return (
    <Contanier>
      <Searchbar onSubmit={this.onSubmit}/>
    </Contanier>
  )
}
};
