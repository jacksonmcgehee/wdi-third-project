import styled from 'styled-components'

const RightButton = styled.button`
    height: 50px;
    width: 100px;
    background-color: #00B16A;
    color: #FDB40D;
    font-size: 25px;
    border: .75px solid #00B16A;
    margin: 10px 20px;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 0;


    @media (max-width: 500px) {
    font-size: 18px;
  }
`

export default RightButton