import styled from 'styled-components'

export const Title = styled.h1`
  margin-bottom: 50px;
  text-align: center;
  font-size: 28px;
  font-weight: 300;
`
export const VoteTypesWrapper = styled.div`
  margin: 20px 0 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

type VoteTypeProps = {
  active: boolean
}

export const ForVoteType = styled.div<VoteTypeProps>`
  width: 280px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(244, 244, 245);
  box-shadow: rgb(218 218 222) 6px 6px 12px, rgb(255 255 255) -6px -6px 12px;
  border-radius: 5px;
  font-size: 48px;
  font-weight: 200;
  color: ${({ active }) => (active ? 'rgb(21, 204, 147)' : '#ccc')};
  background-color: ${({ active }) =>
    active ? 'rgba(21, 204, 147, 0.05)' : 'transparent'};
  border: ${({ active }) => (active ? '1px solid rgb(21, 204, 147)' : '')};
  transition: 300ms ease;
  cursor: pointer;
`
export const AgainstVoteType = styled(ForVoteType)`
  color: ${({ active }) => (active ? 'rgb(233, 89, 121)' : '#ccc')};
  background-color: ${({ active }) =>
    active ? 'rgba(233, 89, 121, 0.06)' : 'transparent'};
  border: ${({ active }) => (active ? '1px solid rgb(233, 89, 121)' : '')};
`
export const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`
