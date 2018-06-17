import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const StyledButton = styled(Button)(
  ({ type }) => ({
    borderColor: type === 'error' ? 'red' : 'blue'
  })
);

// this doesn't generate propTypes, looks like styleguidist doesn't understand it's a component
export default StyledButton;


// below code works, proptypes will be generated in styleguidist
// const EmotionStyledButton = (props) => <StyledButton {...props} />;
// EmotionStyledButton.propTypes = {
//   type: PropTypes.string, 
// }
// export default EmotionStyledButton;