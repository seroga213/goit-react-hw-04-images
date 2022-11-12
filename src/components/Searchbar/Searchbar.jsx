import { useState } from "react";
import { toast } from 'react-toastify';
import { SearchFormBox, Header, SearchFormButton,SearchFormInput } from './Serchbar.styled';
import { MdOutlineFindInPage } from "react-icons/md";
import PropTypes from 'prop-types';


export const Searchbar = ({propSubmit}) => {
  const [searchInputPictures, setSearchInputPictures] = useState('');

  const handleInputChange = (e) => {

      setSearchInputPictures(e.currentTarget.value.toLowerCase());
  }

  const handleNameChange = (e) => {
      e.preventDefault();
      
      if (searchInputPictures.trim() === '') {
          return toast.error("Please input some name pictures to find ");
      }
      propSubmit(searchInputPictures);
  }

      return (
          <Header>
              <SearchFormBox
                  onSubmit={handleNameChange}>
                      <SearchFormButton type="submit">
                          <MdOutlineFindInPage size={40} />
                      </SearchFormButton>

                      <SearchFormInput onChange={handleInputChange}
                          type="text"
                          value={searchInputPictures}
                          autoComplete="off"
                          autoFocus
                          placeholder="Search images and photos"
                  />
              </SearchFormBox>
          </Header>
          
      )
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};