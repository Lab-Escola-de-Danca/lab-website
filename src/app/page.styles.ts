'use client';

import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    max-width: 600px;
  }
`;

export default StyledHome;
