import PropTypes from 'prop-types';
import {Button} from './Button.styled'

export const ButtonMore = ({ onClick }) => {
    return ( <Button type="button" onClick={onClick}>
              Load more
            </Button>
     
    );
  };
  
  ButtonMore.propTypes = {
    onShowMore: PropTypes.func.isRequired,
  };