import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        {/* Bars */}
        <div className="bar bar-1" />
        <div className="bar bar-2" />
        <div className="bar bar-3" />
        <div className="bar bar-4" />
        <div className="bar bar-5" />
        <div className="bar bar-6" />
        <div className="bar bar-7" />
        <div className="bar bar-8" />
        <div className="bar bar-9" />
        <div className="bar bar-10" />
        <div className="bar bar-11" />
        <div className="bar bar-12" />
        <div className="bar bar-13" />
        <div className="bar bar-14" />
        <div className="bar bar-15" />
        <div className="bar bar-16" />
        <div className="bar bar-17" />
        <div className="bar bar-18" />
        <div className="bar bar-19" />
        <div className="bar bar-20" />
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

  // .bar {
  //   display: inline-block;
  //   width: 6px;
  //   background-color: #d9d9d9;
  //   animation: scale-up4 1s linear infinite;
  //   margin: 0 3px; /* Adding margin between the bars */
  // }
  
  .bar {
    display: inline-block;
    width: 6px;
    background-color: rgba(255, 255, 255, .5);
    animation: scale-up4 1s linear infinite;
    margin: 0 3px;
    border-radius: 10px;
  }


  /* Bar Heights */
  .bar-1 { height: 12px; animation-delay: 0s; }
  .bar-2 { height: 12px; animation-delay: 0.1s; }
  .bar-3 { height: 21px; animation-delay: 0.2s; }
  .bar-4 { height: 36px; animation-delay: 0.3s; }
  .bar-5 { height: 66px; animation-delay: 0.4s; }
  .bar-6 { height: 48px; animation-delay: 0.5s; }
  .bar-7 { height: 24px; animation-delay: 0.6s; }
  .bar-8 { height: 24px; animation-delay: 0.7s; }
  .bar-9 { height: 24px; animation-delay: 0.8s; }
  .bar-10 { height: 24px; animation-delay: 0.9s; }
  .bar-11 { height: 24px; animation-delay: 1s; }
  .bar-12 { height: 48px; animation-delay: 1.1s; }
  .bar-13 { height: 66px; animation-delay: 1.2s; }
  .bar-14 { height: 36px; animation-delay: 1.3s; }
  .bar-15 { height: 24px; animation-delay: 1.4s; }
  .bar-16 { height: 24px; animation-delay: 1.5s; }
  .bar-17 { height: 24px; animation-delay: 1.6s; }
  .bar-18 { height: 24px; animation-delay: 1.7s; }
  .bar-19 { height: 21px; animation-delay: 2s; }
  .bar-20 { height: 14px; animation-delay: 2.25s; }

  /* Animation */
  @keyframes scale-up4 {
    20% {
      background-color: #ffff;
      transform: scaleY(1.5);
    }

    40% {
      transform: scaleY(1);
    }
  }
`;

export default Loader;
