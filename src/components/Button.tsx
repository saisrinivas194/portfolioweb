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
    width: 90px;
    height: 28px;
    text-decoration: none;
    font-size: 10px;
    font-weight: bold;
    color: var(--line_color);
    letter-spacing: 1px;
    transition: all 0.3s ease;

    @media (min-width: 640px) {
      width: 100px;
      height: 30px;
      font-size: 11px;
      letter-spacing: 1.2px;
    }

    @media (min-width: 768px) {
      width: 110px;
      height: 32px;
    }

    @media (min-width: 1024px) {
      width: 120px;
    }
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
    height: 2px;
    border-radius: 2px;
    background: var(--line_color);
    transition: all 0.5s ease;

    @media (min-width: 640px) {
      height: 3px;
    }
  }
  .button::before {
    top: 0;
    left: 36px;
    width: calc(100% - 38px * 2 - 12px);

    @media (min-width: 640px) {
      left: 40px;
      width: calc(100% - 42px * 2 - 14px);
    }

    @media (min-width: 768px) {
      left: 44px;
      width: calc(100% - 46px * 2 - 16px);
    }
  }
  .button::after {
    top: 0;
    right: 36px;
    width: 6px;

    @media (min-width: 640px) {
      right: 40px;
      width: 7px;
    }

    @media (min-width: 768px) {
      right: 44px;
      width: 8px;
    }
  }
  .button__text::before {
    bottom: 0;
    right: 36px;
    width: calc(100% - 38px * 2 - 12px);

    @media (min-width: 640px) {
      right: 40px;
      width: calc(100% - 42px * 2 - 14px);
    }

    @media (min-width: 768px) {
      right: 44px;
      width: calc(100% - 46px * 2 - 16px);
    }
  }
  .button__text::after {
    bottom: 0;
    left: 36px;
    width: 6px;

    @media (min-width: 640px) {
      left: 40px;
      width: 7px;
    }

    @media (min-width: 768px) {
      left: 44px;
      width: 8px;
    }
  }
  .button__line {
    position: absolute;
    top: 0;
    width: 38px;
    height: 100%;
    overflow: hidden;

    @media (min-width: 640px) {
      width: 42px;
    }

    @media (min-width: 768px) {
      width: 46px;
    }
  }
  .button__line::before {
    content: "";
    position: absolute;
    top: 0;
    width: 150%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 300px;
    border: solid 2px var(--line_color);

    @media (min-width: 640px) {
      border-width: 3px;
    }
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
    letter-spacing: 3px;

    @media (min-width: 640px) {
      letter-spacing: 4px;
    }
  }
  .button:hover::before,
  .button:hover .button__text::before {
    width: 6px;

    @media (min-width: 640px) {
      width: 7px;
    }

    @media (min-width: 768px) {
      width: 8px;
    }
  }
  .button:hover::after,
  .button:hover .button__text::after {
    width: calc(100% - 38px * 2 - 12px);

    @media (min-width: 640px) {
      width: calc(100% - 42px * 2 - 14px);
    }

    @media (min-width: 768px) {
      width: calc(100% - 46px * 2 - 16px);
    }
  }
  .button__drow1,
  .button__drow2 {
    position: absolute;
    z-index: -1;
    border-radius: 16px;
    transform-origin: 16px 16px;
  }
  .button__drow1 {
    top: -6px;
    left: 16px;
    width: 18px;
    height: 0;
    transform: rotate(30deg);

    @media (min-width: 640px) {
      top: -7px;
      left: 18px;
      width: 21px;
    }

    @media (min-width: 768px) {
      top: -8px;
      left: 20px;
      width: 24px;
    }
  }
  .button__drow2 {
    top: 18px;
    left: 32px;
    width: 18px;
    height: 0;
    transform: rotate(-127deg);

    @media (min-width: 640px) {
      top: 20px;
      left: 35px;
      width: 21px;
    }

    @media (min-width: 768px) {
      top: 22px;
      left: 38px;
      width: 24px;
    }
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
    height: 18px;
    border-radius: 16px;
    transform-origin: 16px 16px;
    transform: rotate(-60deg);

    @media (min-width: 640px) {
      height: 21px;
    }

    @media (min-width: 768px) {
      height: 24px;
    }
  }
  .button__drow1::after {
    top: -3px;
    left: 18px;
    width: 0;
    height: 18px;
    border-radius: 16px;
    transform-origin: 16px 16px;
    transform: rotate(69deg);

    @media (min-width: 640px) {
      top: -4px;
      left: 20px;
      height: 21px;
    }

    @media (min-width: 768px) {
      top: -5px;
      left: 22px;
      height: 24px;
    }
  }
  .button__drow2::before {
    bottom: 0;
    left: 0;
    width: 0;
    height: 18px;
    border-radius: 16px;
    transform-origin: 16px 16px;
    transform: rotate(-146deg);

    @media (min-width: 640px) {
      height: 21px;
    }

    @media (min-width: 768px) {
      height: 24px;
    }
  }
  .button__drow2::after {
    bottom: 10px;
    left: -16px;
    width: 0;
    height: 18px;
    border-radius: 16px;
    transform-origin: 16px 16px;
    transform: rotate(-262deg);

    @media (min-width: 640px) {
      bottom: 11px;
      left: -18px;
      height: 21px;
    }

    @media (min-width: 768px) {
      bottom: 13px;
      left: -20px;
      height: 24px;
    }
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
    0% { height: 0; }
    100% { height: 40px; }
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
      width: 50px;
    }
  }
  @keyframes drow3 {
    0% { width: 0; }
    100% { width: 35px; }
  }
  @keyframes drow4 {
    0% { height: 0; }
    100% { height: 50px; }
  }
  @keyframes drow5 {
    0% { width: 0; }
    100% { width: 52px; }
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

  @media (max-width: 639px) {
    @keyframes drow1 {
      0% { height: 0; }
      100% { height: 30px; }
    }
    @keyframes drow2 {
      100% { width: 40px; }
    }
    @keyframes drow3 {
      100% { width: 25px; }
    }
    @keyframes drow4 {
      100% { height: 40px; }
    }
    @keyframes drow5 {
      100% { width: 42px; }
    }
  }
`;

export default Button; 