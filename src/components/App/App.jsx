import { Component,} from 'react';
import { Contanier } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import imgApiService from 'utils/imgService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class App extends Component{
  state={
    searchQuery: '',
    data: [],
    showGallery: true,
    showloader: false,
    showModal: false,
    showBtnMore: false,
    page: 1,
    modalChildren: null,
    error: null,
  }

  per_page = 12;
  

  componentDidMount(){
    if (this.state.searchQuery){
      this.requestServer(1, []);}
  }
  
  //Запускається, коли App змінюється
  componentDidUpdate(_, prevState){
    if (prevState.searchQuery !== this.state.searchQuery){
      this.setState({showGallery: false});
      this.requestServer(1, []);}
}

  requestServer(page, prevData){
    const newPage = page || 1;
    this.setState({showloader: true});
    imgApiService(this.state.searchQuery, page, this.per_page).then(responce => { 
      let showBtnmore = false;
      if((responce.total / this.per_page) >= this.state.page){showBtnmore = true}
      this.setState({data: [...prevData, ...responce.hits],  showBtnMore: showBtnmore, showGallery: true, page: newPage, error: null})}
      )
      .catch(error=>{ 
        toast.error(error.message);
        return this.setState({error: error.message})})
      .finally(this.setState({showloader: false}));
  }
  
  // цей метод визивається під час сабміту форми (натискання кнопки пошук)
  onSubmit = (valueInput) => {
    if(valueInput.trim() === ""){return toast.warn("Введіть дані для пошуку.")};
    if (this.state.searchQuery !== valueInput){
    this.setState({searchQuery: valueInput, showloader: true, showBtnMore: false})
    }
  }

  loadMore=()=>{
    this.requestServer(this.state.page+1, this.state.data);
  }

  toggleModal = (children) => {
    const newChildren = children || "";
    this.setState(({showModal}) => ({showModal: !showModal, modalChildren: newChildren,}))
  }

  render(){
    const {data, showloader, showModal, showBtnMore, searchQuery} = this.state;

    return (
      <Contanier>
        {showModal && <Modal onClose={this.toggleModal}>{this.state.modalChildren}</Modal>}
        <Searchbar disable={showModal} value={searchQuery} onSubmit={this.onSubmit}/>
        {this.state.showGallery && <ImageGallery reply={data} onModal={this.toggleModal}/>}

        {showloader && <Loader/>}
        {showBtnMore && <Button loadMore={this.loadMore}/>}
         
        <ToastContainer position="top-right" autoClose={2700} />
      </Contanier>
    )
  }
};
