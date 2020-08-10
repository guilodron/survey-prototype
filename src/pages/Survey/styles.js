import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  /* height: 100vh; */
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 300px;  
`;


const rotate = keyframes`
  from {
    visibility: hidden;
    margin-left: 30%;
    opacity: 0;
  }

  to {
    visibility: visible;
    margin-left: 0;
    opacity: 1;
  }
`;

const typing = keyframes`
  from { width: 0; visibility: hidden; white-space: nowrap }
  to { width: 100%; visibility: visible; white-space: normal }
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    width: 0%;
    visibility: hidden;
    overflow: hidden;
    animation: ${typing} 5s steps(100, end) forwards;
    border-bottom: 1px solid #FF6B35;
    padding: 18px;
    max-width: 320px;
    white-space: nowrap;
    color: black;
    font-size: 1.25rem;
    font-weight: bold;
  }
  `;

export const Options = styled.div`
  visibility: hidden;
  animation: ${rotate} 0.7s linear forwards;
  animation-delay: 1.5s;
  margin-top: 15px;
  margin-bottom: 20px;

  button {
    background-color: #FF6B35;
    padding: 10px;
    border: none;
    border-radius: 20px;
    margin-right: 20px;
    min-width: 80px;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const Answer = styled.div`
  align-self: flex-end;
  span {

    background: #1A659E;
    visibility: visible;
    padding: 18px;
    border-radius: 20px;
    font-size: 1.25rem;

    font-weight: bold;
    color: white;

  }
`;

export const Form = styled.form`
  margin-top: 10px;
  min-width: 300px;
  animation: ${rotate} 0.7s linear forwards;
  animation-delay: 1.5s;
  visibility: hidden;
  margin-bottom: 20px;

  input {
    font-size: 21px;
    line-height: 45px;
    border: none;
  }

  button {
    height: 45px;
    font-size: 21px;
    border: none;
    background-color: #FF6B35;
    padding: 10px;
    border-radius: 20px;

  }
`;
