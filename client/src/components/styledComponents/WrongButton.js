import styled from 'styled-components'

const WrongButton = styled.button`
    height: 50px;
    width: 100px;
    background-color: #B11D00;
    color: #FDB40D;
    font-size: 25px;
    border: .75px solid #B11D00;
    margin: 20px 5px;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;


    @media (max-width: 500px) {
    font-size: 18px;
  }
`

export default WrongButton