import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: ${props => props.theme.brand0};
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: ${props => props.theme.white};
    padding: 0 1rem;
  }
`;

export default Title;
