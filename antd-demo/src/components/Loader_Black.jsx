import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        {/* Bars */}
        <div className="bar2 bar2-1" />
        <div className="bar2 bar2-2" />
        <div className="bar2 bar2-3" />
        <div className="bar2 bar2-4" />
        <div className="bar2 bar2-5" />
        <div className="bar2 bar2-6" />
        <div className="bar2 bar2-7" />
        <div className="bar2 bar2-8" />
        <div className="bar2 bar2-9" />
        <div className="bar2 bar2-10" />
        <div className="bar2 bar2-11" />
        <div className="bar2 bar2-12" />
        <div className="bar2 bar2-13" />
        <div className="bar2 bar2-14" />
        <div className="bar2 bar2-15" />
        <div className="bar2 bar2-16" />
        <div className="bar2 bar2-17" />
        <div className="bar2 bar2-18" />
        <div className="bar2 bar2-19" />
        <div className="bar2 bar2-20" />
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

  .bar2 {
    display: inline-block;
    width: 4.2px; /* 30% smaller than 6px */
    background-color: #1f1f1f;
    animation: scale-up5 1s linear infinite;
    margin: 0 2.1px; /* 30% smaller than 3px */
    border-radius: 7px; /* 30% smaller than 10px */
  }

  /* Bar Heights (30% smaller than original heights) */
  .bar2-1 { height: 8.4px; animation-delay: 0s; }
  .bar2-2 { height: 8.4px; animation-delay: 0.1s; }
  .bar2-3 { height: 14.7px; animation-delay: 0.2s; }
  .bar2-4 { height: 25.2px; animation-delay: 0.3s; }
  .bar2-5 { height: 46.2px; animation-delay: 0.4s; }
  .bar2-6 { height: 33.6px; animation-delay: 0.5s; }
  .bar2-7 { height: 16.8px; animation-delay: 0.6s; }
  .bar2-8 { height: 16.8px; animation-delay: 0.7s; }
  .bar2-9 { height: 16.8px; animation-delay: 0.8s; }
  .bar2-10 { height: 16.8px; animation-delay: 0.9s; }
  .bar2-11 { height: 16.8px; animation-delay: 1s; }
  .bar2-12 { height: 33.6px; animation-delay: 1.1s; }
  .bar2-13 { height: 46.2px; animation-delay: 1.2s; }
  .bar2-14 { height: 25.2px; animation-delay: 1.3s; }
  .bar2-15 { height: 16.8px; animation-delay: 1.4s; }
  .bar2-16 { height: 16.8px; animation-delay: 1.5s; }
  .bar2-17 { height: 16.8px; animation-delay: 1.6s; }
  .bar2-18 { height: 16.8px; animation-delay: 1.7s; }
  .bar2-19 { height: 14.7px; animation-delay: 2s; }
  .bar2-20 { height: 9.8px; animation-delay: 2.25s; }

  /* Animation */
  @keyframes scale-up5 {
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
