import { useState, useEffect } from 'react';
import { Contanier } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import PreventionError from 'components/Error';
import imgApiService from 'utils/imgService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let firstRunApp = 1;
export default function App(){
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [showGallery, setShowGallery] = useState(true);
  const [showloader, setShowloader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBtnMore, setShowBtnMore] = useState(false);
  const [page, setPage] = useState(1);
  const [modalChildren, setModalChildren] = useState(null);
  const [error, setError] = useState(null);

  const PER_PAGE = 12;
  //Виконається 1 раз при монтуванні компонента, якщо в стейті пошуковий запит не пустий.
  if (firstRunApp === 1 && searchQuery){
    firstRunApp +=1;
    setShowGallery(false);
    requestServer(1, []);}
 
  
  //При оновленні searchQuery
  useEffect(()=>{
    
    if(!searchQuery){return};
    setShowGallery(false);
    requestServer(1, []);
  },[searchQuery])
  

  function requestServer(page, prevData){
    const newPage = page || 1;
    setShowloader(true);
    
    imgApiService(searchQuery, page, PER_PAGE).then(responce => { 
      let showBtn = false;
      if((responce.total / PER_PAGE) >= (page+1)){showBtn = true};
      setData([...prevData, ...responce.hits]);
      setShowBtnMore(showBtn);
      setShowGallery(true);
      setPage(newPage);
      setError(null);
      })
      .catch(error=>{ 
        return setError(error.message)})
      .finally(setShowloader(false));
  };
  
  // цей метод визивається під час сабміту форми (натискання кнопки пошук)
  const onSubmit = (valueInput) => {
    if(valueInput.trim() === ""){return toast.warn("Введіть дані для пошуку.")};
    if (searchQuery !== valueInput){
      setSearchQuery(valueInput);
      setShowloader(true);
      setShowBtnMore(false);
    }
  }

  const loadMore=()=>{
    requestServer(page+1, data);
  }

  const toggleModal = (children) => {
    const newChildren = children || "";
    setShowModal(showModal=>!showModal);
    setModalChildren(newChildren);
  }

    return (
      <Contanier>

        {showModal && <Modal onClose={toggleModal}>{modalChildren}</Modal>}
        <Searchbar disable={showModal} value={searchQuery} onSubmit={onSubmit}/>

        <PreventionError message={error} query={searchQuery}>
          {showGallery && <ImageGallery reply={data} onModal={toggleModal}/>}
        </PreventionError>
        
        
        {showloader && <Loader/>}
        {showBtnMore && <Button loadMore={loadMore}/>}
         
        <ToastContainer position="top-right" autoClose={2700} />
      </Contanier>
    )
};
