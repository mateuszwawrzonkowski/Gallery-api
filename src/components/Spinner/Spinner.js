import styled from 'styled-components';
import { rotate360 } from 'theme/keyframes';

const Spinner = styled.div`
animation: ${rotate360} 1s linear infinite;
transform: translateZ(0);
border-top: 3px solid white;
border-right: 3px solid white;
border-bottom: 3px solid white;
border-left: 6px solid ${({ theme }) => theme.spinner};;
background: transparent;
width: 64px;
height: 64px;
border-radius: 50%;
`;

export default Spinner;
