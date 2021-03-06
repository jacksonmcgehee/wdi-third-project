import styled from 'styled-components'

const FlashBigContainer = styled.div`
  height: 57vh;
  width: 100%;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  @media (max-height: 750px) {
    height: 40vh;
`

export default FlashBigContainer