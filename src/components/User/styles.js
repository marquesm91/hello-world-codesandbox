import styled from 'styled-components';

const SIZE = 320;
const ASPECT_RATIO = 9 / 16;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px
  color: #2b2b2b;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(43, 43, 43, 0.4);
  max-width: ${SIZE}px;
  height: ${SIZE * ASPECT_RATIO}px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

export const JobTitle = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;

export const Description = styled.div`
  margin-top: auto;
`;
