
import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: rgb(113, 203, 249);;
  color: #fff;
  border-radius: 3px;
  margin-left: 200px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ButtonClose = styled.button`
  width: 50px;
  height: 35px;
  background-color: rgb(113, 203, 249);;
  color: #fff;
  border-radius: 3px;
`;

// Text

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
color: #777;
font-family: "Raleway", sans-serif;
font-size: 0.8em;
margin: 0.5em 0;
position: relative;
padding-left: 200px;
`;