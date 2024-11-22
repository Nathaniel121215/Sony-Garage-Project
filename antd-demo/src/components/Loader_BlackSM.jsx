import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        {/* Bars */}
        <div className="bar3 bar3-1" />
        <div className="bar3 bar3-2" />
        <div className="bar3 bar3-3" />
        <div className="bar3 bar3-4" />
        <div className="bar3 bar3-5" />
        <div className="bar3 bar3-6" />
        <div className="bar3 bar3-7" />
        <div className="bar3 bar3-8" />
        <div className="bar3 bar3-9" />
        <div className="bar3 bar3-10" />
        <div className="bar3 bar3-11" />
        <div className="bar3 bar3-12" />
        <div className="bar3 bar3-13" />
        <div className="bar3 bar3-14" />
        <div className="bar3 bar3-15" />
        <div className="bar3 bar3-16" />
        <div className="bar3 bar3-17" />
        <div className="bar3 bar3-18" />
        <div className="bar3 bar3-19" />
        <div className="bar3 bar3-20" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .bar3 {
    display: inline-block;
    width: 2.5px; /* Reduced by 20% from 3.2px */
    background-color: #1f1f1f;
    animation: scale-up6 1s linear infinite;
    margin-right: 2.5px; /* Reduced by 20% from 2px */
    border-radius: 5.6px; /* Reduced by 20% from 7px */
  }

  /* Bar Heights (20% smaller than original heights) */
  .bar3-1 { height: 3.6px; animation-delay: 0s; } /* Reduced by 20% */
  .bar3-2 { height: 3.6px; animation-delay: 0.1s; }
  .bar3-3 { height: 5.6px; animation-delay: 0.2s; }
  .bar3-4 { height: 9.6px; animation-delay: 0.3s; }
  .bar3-5 { height: 16px; animation-delay: 0.4s; }
  .bar3-6 { height: 12px; animation-delay: 0.5s; }
  .bar3-7 { height: 6.4px; animation-delay: 0.6s; }
  .bar3-8 { height: 6.4px; animation-delay: 0.7s; }
  .bar3-9 { height: 6.4px; animation-delay: 0.8s; }
  .bar3-10 { height: 6.4px; animation-delay: 0.9s; }
  .bar3-11 { height: 6.4px; animation-delay: 1s; }
  .bar3-12 { height: 12px; animation-delay: 1.1s; }
  .bar3-13 { height: 16px; animation-delay: 1.2s; }
  .bar3-14 { height: 9.6px; animation-delay: 1.3s; }
  .bar3-15 { height: 6.4px; animation-delay: 1.4s; }
  .bar3-16 { height: 6.4px; animation-delay: 1.5s; }
  .bar3-17 { height: 6.4px; animation-delay: 1.6s; }
  .bar3-18 { height: 6.4px; animation-delay: 1.7s; }
  .bar3-19 { height: 5.6px; animation-delay: 2s; }
  .bar3-20 { height: 3.6px; animation-delay: 2.25s; }

  /* Animation */
  @keyframes scale-up6 {
    20% {
      background-color: #1f1f1f;
      transform: scaleY(1.5);
    }

    40% {
      transform: scaleY(1);
    }
  }
`;

export default Loader;
