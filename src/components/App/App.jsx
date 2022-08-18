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


export default function App(){
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [showGallery, setShowGallery] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showBtnMore, setShowBtnMore] = useState(false);
  const [page, setPage] = useState(1);
  const [modalChildren, setModalChildren] = useState(null);
  const [error, setError] = useState(null);
  const [showLoader, setLoader] = useState(false);
  
  //Пагінація, кількість карток
  const PER_PAGE = 12;
  
  //При оновленні searchQuery або page
  useEffect(()=>{
    if(!searchQuery){return};
      setShowBtnMore(false);
      imgApiService(searchQuery, page, PER_PAGE).then(responce => { 
        let showBtn = false;
        if((responce.total / PER_PAGE) >= (page+1)){showBtn = true};
        setData(prevData => [...prevData, ...responce.hits]);
        setShowBtnMore(showBtn);
        setShowGallery(true);
        // setPage(newPage);
        setError(null);
        setLoader(false);
        })
        .catch(error=>{ 
          setLoader(false);
          return setError(error.message)})
  },[searchQuery,page]);
 
  // цей метод визивається під час сабміту форми (натискання кнопки пошук)
  const onSubmit = (valueInput) => {
    if(valueInput.trim() === ""){return toast.warn("Введіть дані для пошуку.")};
    if (searchQuery !== valueInput){
      setSearchQuery(valueInput);
      setShowBtnMore(false);
      setData([]);
      setPage(1);
    }
    setLoader(true);
    setShowGallery(false);
  };

  const loadMore=()=>{
    setPage(page=>page+1);
    setLoader(true);
  }

  const toggleModal = (children) => {
    const newChildren = children || "";
    setShowModal(showModal=>!showModal);
    setModalChildren(newChildren);
  }

    return (
      <Contanier>
        <Searchbar disable={showModal} value={searchQuery} onSubmit={onSubmit}/>

        <PreventionError message={error} query={searchQuery}>
          {showGallery  && <ImageGallery reply={data} onModal={toggleModal}/>}
        </PreventionError>
        
        {showLoader && <Loader/>}
        {showBtnMore && <Button loadMore={loadMore}/>}
         
        {showModal &&  <Modal onClose={toggleModal}>{modalChildren}</Modal>}
        <ToastContainer position="top-right" autoClose={2700} />
      </Contanier>
    )
};
