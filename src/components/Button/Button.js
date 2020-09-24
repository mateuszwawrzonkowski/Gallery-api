import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    color: white;
    margin: 20px 40px;
    text-transform: uppercase;
    border-radius: 20px;
    background: ${({ theme }) => theme.buttonBackground};
    font-size: 2.1rem;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow:0px 6px 10px 0px rgba(0,0,0,0.5);
        :active{
            box-shadow: inset 0 0 8px black;
        }
    @media (min-width: 768px) {
        width: 150px;
        height: 40px;
  }
`;

const ArrowIcon = styled(FontAwesomeIcon)`
    font-size: 3rem;
`;

const Button = ({ icon, onClick }) => (
  <Btn onClick={onClick}>
    <ArrowIcon icon={icon} />
  </Btn>
);

Button.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
