import styled from 'styled-components'

const DeleteButton = styled.input`
    height: 70px;
    width: 100px;
    background-color: white;
    color: #B11D00;
    font-size: 25px;
    border: .75px solid #B11D00;
    margin: 0 5px;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;


    @media (max-width: 400px) {
    font-size: 18px;
  }
`

export default DeleteButton