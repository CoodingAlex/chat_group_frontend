import React from 'react';
import styled from 'styled-components';
const StyledSpinner = styled.div`
  @keyframes donut-spin {
    to {
      transform: rotate(1turn);
    }
  }
  display: inline-block;
  border: 4px solid hsl(180, 11%, 84%);
  border-left-color: hsl(240, 4%, 27%);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: donut-spin 1.2s linear infinite;
`;

const LoadingSpinner = () => {
  return <StyledSpinner />;
};

export default LoadingSpinner;
