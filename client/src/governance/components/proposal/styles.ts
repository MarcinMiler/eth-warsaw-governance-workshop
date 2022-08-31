import styled from 'styled-components'
import { match } from 'ts-pattern'

import { ProposalState } from '../../decoders/proposal'

export const Container = styled.div`
  width: 100%;
  height: 270px;
  padding: 30px;
  background: rgb(244, 244, 245);
  box-shadow: rgb(218 218 222) 6px 6px 12px, rgb(255 255 255) -6px -6px 12px;
  border-radius: 20px;
  cursor: pointer;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Id = styled.p`
  margin-top: 10px;
  color: #999;
`
export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

type StatusIndicatorProps = {
  state: ProposalState
}

export const StatusIndicator = styled.div<StatusIndicatorProps>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ state }) =>
    match(state)
      .with(ProposalState.Pending, () => '#cccccc')
      .with(ProposalState.Active, () => '#327cd1')
      .with(ProposalState.Succeeded, () => '#32a852')
      .with(ProposalState.Deafeated, () => '#e95978')
      .otherwise(() => '')};
`
export const StatusText = styled.p`
  margin-left: 7px;
  color: #999;
`
export const Title = styled.h1`
  margin: 20px 0 20px;
  font-size: 22px;
  font-weight: 500;
`
export const ProgressSliderWrapper = styled.div`
  margin-top: 30px;
`
export const DeadlineWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`
export const EndTime = styled.p`
  color: #999;
  font-weight: 500;
  font-size: 14px;
`
export const EndTimeValue = styled.p`
  margin-left: 5px;
  color: #999;
  font-weight: 400;
  font-size: 14px;
`
