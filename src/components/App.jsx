import { Searchbar } from '../components/Searchbar/Searchbar';
import { ToastContainer,toast} from 'react-toastify';
// import Notiflix from 'notiflix';
// import * as Scroll from 'react-scroll';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './Gallery/ImageGallery';
// import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { ButtonMore } from './Button/Button';
import { useState, useEffect } from "react";
import { FechCSerchImages } from './api/Api';
import { Title } from '../components/Searchbar/Serchbar.styled';
const perPage = 12;

export const App = () => {
  const [searchPictures, setSearchPictures] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [loadingmore, setLoadingmore] = useState(false);
  const [findPictures, setFindPictures] = useState([]);
  const perPage = 12;
                                                    

  const handleSerchImages = (searchInputPictures) => {
    if (searchPictures === searchInputPictures) {
      return toast.error("Enter new query for serch, this query you can seee now-))");
    }
    
    setSearchPictures(searchInputPictures);
    setPage(1);
    setLoader(false);
    setFindPictures([]);
  }

  useEffect(() => {

    if (searchPictures === '') {
      return;
    }
    setLoadingmore(false)
    setLoader(true);
    setError(null);

      
    FechCSerchImages(searchPictures, page, perPage)
      .then(({ total, totalHits, hits }) => {       
          if (total === 0) {
            setLoader(false);
            setError(Error)
            
            return Promise.reject(new Error(`Sorry, but we can't find ${searchPictures}. Try again.`))
          }
          
          if (totalHits > perPage) {
            setLoadingmore(true);
          }
              
          if (page === Math.ceil(totalHits / perPage)) {
            setLoadingmore(false);
          }

        setFindPictures((prevImages)=>([...prevImages, ...hits]))
        setLoader(false);
        })
      .catch(error => {
        setError(error);
      })
  },[page, searchPictures, perPage])



  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
    
  
  }

  return (<div
      style={{
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        paddingBottom: 24,
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',

      }}>
      <Searchbar propSubmit={handleSerchImages} />
      <ToastContainer autoClose={1500} />
      <ImageGallery pictureSerch={findPictures}></ImageGallery >
      {loadingmore && <ButtonMore onClick={loadMore}></ButtonMore>}
      {loader && <Loader></Loader>}
      {error && <Title > {error.message} </Title>}
      
    </div>
    );




  
}

  
  // loadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }))
  // }
  

  // render() {
  //   const { findPictures, status, error, } = this.state;
    
  //   return (<div
  //     style={{
  //       justifyContent: 'center',
  //       flexDirection: "column",
  //       alignItems: 'center',
  //       fontSize: 20,
  //       color: '#010101',
  //       paddingBottom: 24,
  //       display: 'grid',
  //       gridTemplateColumns: '1fr',
  //       gridGap: '16px',

  //     }}>
  //     <Searchbar propSubmit={this.handleSerchImages} />
  //     <ToastContainer autoClose={1500} />
  //     {status === "pending" && <Loader></Loader>}
  //     {status === "rejected" && <Title > {error.message} </Title>}
  //     {status === "resolved" && <>
  //       <ImageGallery pictureSearch={findPictures}></ImageGallery >
  //       {findPictures.hits.length < findPictures.totalHits && <ButtonMore onClick={this.loadMore}></ButtonMore>}
  //     </>}
  //   </div>
  //   );

  