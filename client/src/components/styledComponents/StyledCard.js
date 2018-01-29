import styled from 'styled-components'

const StyledCard = styled.div`
    height: 300px;
    width: 500px;
    padding: 5px;
    margin: 5px;
    border: 1px solid #00B16A;
    text-align: center;
    color: #00B16A;
    display: grid;
    grid-template-rows: 20% 60% 20%;

    @media (max-width: 500px) {
    width: 300px;
  }
   
`

export default StyledCard