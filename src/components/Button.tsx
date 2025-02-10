import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => {
  return (
    <StyledWrapper>
      <div className="container">
        <a href={href} className="button type--C">
          <div className="button__line" />
          <div className="button__line" />
          <span className="button__text">{text}</span>
          <div className="button__drow1" />
          <div className="button__drow2" />
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .type--C {
    --line_color: #3f2b96;
    --back_color: #a8c0ff;
  }
  .button {
    position: relative;
    z-index: 0;
    width: 120px;
    height: 32px;
    text-decoration: none;
    font-size: 11px;
    font-weight: bold;
    color: var(--line_color);
    letter-spacing: 1.2px;
    transition: all 0.3s ease;
  }
  .button__text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .button::before,
  .button::after,
  .button__text::before,
  .button__text::after {
    content: "";
    position: absolute;
    height: 3px;
    border-radius: 2px;
    background: var(--line_color);
    transition: all 0.5s ease;
  }
  .button::before {
    top: 0;
    left: 46px;
    width: calc(100% - 48px * 2 - 16px);
  }
  .button::after {
    top: 0;
    right: 46px;
    width: 8px;
  }
  .button__text::before {
    bottom: 0;
    right: 46px;
    width: calc(100% - 48px * 2 - 16px);
  }
  .button__text::after {
    bottom: 0;
    left: 46px;
    width: 8px;
  }
  .button__line {
    position: absolute;
    top: 0;
    width: 48px;
    height: 100%;
    overflow: hidden;
  }
  .button__line::before {
    content: "";
    position: absolute;
    top: 0;
    width: 150%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 300px;
    border: solid 3px var(--line_color);
  }
  .button__line:nth-child(1),
  .button__line:nth-child(1)::before {
    left: 0;
  }
  .button__line:nth-child(2),
  .button__line:nth-child(2)::before {
    right: 0;
  }
  .button:hover {
    letter-spacing: 4px;
  }
  .button:hover::before,
  .button:hover .button__text::before {
    width: 8px;
  }
  .button:hover::after,
  .button:hover .button__text::after {
    width: calc(100% - 48px * 2 - 16px);
  }
  .button__drow1,
  .button__drow2 {
    position: absolute;
    z-index: -1;
    border-radius: 16px;
    transform-origin: 16px 16px;
  }
  .button__drow1 {
    top: -8px;
    left: 20px;
    width: 24px;
    height: 0;
    transform: rotate(30deg);
  }
  .button__drow2 {
    top: 22px;
    left: 38px;
    width: 24px;
    height: 0;
    transform: rotate(-127deg);
  }
  .button__drow1::before,
  .button__drow1::after,
  .button__drow2::before,
  .button__drow2::after {
    content: "";
    position: absolute;
  }
  .button__drow1::before {
    bottom: 0;
    left: 0;
    width: 0;
    height: 24px;
    border-radius: 16px;
    transform-origin: 16px 16px;
    transform: rotate(-60deg);
  }
  .button__drow1::after {
    top: -5px;
    left: 22px;
    width: 0;
    height: 24px;
    border-radius: 16px;
    transform-origin: 16px 16px;
    transform: rotate(69deg);
  }
  .button__drow2::before {
    bottom: 0;
    left: 0;
    width: 0;
    height: 24px;
    border-radius: 16px;
    transform-origin: 16px 16px;
    transform: rotate(-146deg);
  }
  .button__drow2::after {
    bottom: 13px;
    left: -20px;
    width: 0;
    height: 24px;
    border-radius: 16px;
    transform-origin: 16px 16px;
    transform: rotate(-262deg);
  }
  .button__drow1,
  .button__drow1::before,
  .button__drow1::after,
  .button__drow2,
  .button__drow2::before,
  .button__drow2::after {
    background: var(--back_color);
  }
  .button:hover .button__drow1 {
    animation: drow1 ease-in 0.06s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow1::before {
    animation: drow2 linear 0.08s 0.06s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow1::after {
    animation: drow3 linear 0.03s 0.14s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow2 {
    animation: drow4 linear 0.06s 0.2s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow2::before {
    animation: drow3 linear 0.03s 0.26s;
    animation-fill-mode: forwards;
  }
  .button:hover .button__drow2::after {
    animation: drow5 linear 0.06s 0.32s;
    animation-fill-mode: forwards;
  }
  @keyframes drow1 {
    0% {
      height: 0;
    }
    100% {
      height: 50px;
    }
  }
  @keyframes drow2 {
    0% {
      width: 0;
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    11% {
      opacity: 1;
    }
    100% {
      width: 60px;
    }
  }
  @keyframes drow3 {
    0% {
      width: 0;
    }
    100% {
      width: 40px;
    }
  }
  @keyframes drow4 {
    0% {
      height: 0;
    }
    100% {
      height: 60px;
    }
  }
  @keyframes drow5 {
    0% {
      width: 0;
    }
    100% {
      width: 62px;
    }
  }

  .container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export default Button; 