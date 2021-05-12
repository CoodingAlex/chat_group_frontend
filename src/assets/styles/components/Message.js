import styled from 'styled-components';
import { device } from '../utils/device';
export const MessageWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  word-break: break-all;
`;
export const ImageContainer = styled.figure`
  max-height: 42px;
  max-width: 42px;
  margin-right: 20px;
  img {
    max-height: inherit;
    max-width: inherit;
    border-radius: 7px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110%;
`;

export const TimeStamp = styled.p`
  font-size: 12px;
  color: #828282;
`;

export const Name = styled.p`
  font-weight: 700;
  color: #828282;
`;
