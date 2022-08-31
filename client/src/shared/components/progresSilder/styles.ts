import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 16px;
  position: relative;
  background: rgb(239, 239, 239);
  box-shadow: rgb(218 218 222) 1px 1px 2px inset,
    rgb(255 255 255) -1px -1px 2px inset;
  border-radius: 7px;
`
type ForVotesProggresProps = {
  forVotes: number
}

export const ForVotesProggres = styled.div<ForVotesProggresProps>`
  width: ${({ forVotes }) => `calc(${forVotes}% - 3px)`};
  height: 10px;
  position: absolute;
  top: 3px;
  left: 3px;
  background-color: rgb(75, 219, 75);
  border-radius: 8px;
  z-index: 2;
`

type AgainstVotesProggresProps = {
  againstVotes: number
}

export const AgainstVotesProgress = styled.div<AgainstVotesProggresProps>`
  width: ${({ againstVotes }) => `calc(${againstVotes}% - 7px)`};
  height: 10px;
  position: absolute;
  top: 3px;
  left: 4px;
  background-color: rgb(233, 89, 121);
  border-radius: 8px;
  z-index: 1;
`
