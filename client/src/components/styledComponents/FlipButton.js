import styled from 'styled-components'

const FlipButton = styled.button`
    height: 70px;
    width: 100px;
    background-color: white;
    color: #00B16A;
    font-size: 25px;
    border: .75px solid #00B16A;
    margin: 20px 5px;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;


    @media (max-width: 500px) {
    font-size: 18px;
  }
`

export default FlipButton