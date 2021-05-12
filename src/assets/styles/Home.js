import styled from 'styled-components';
import { device } from './utils/device';

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  font-family: 'Noto Sans', sans-serif;
  min-height: inherit;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;
