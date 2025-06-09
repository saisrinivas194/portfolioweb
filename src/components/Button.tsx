import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  href: string;
  target?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, href, target = "_self", onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (href && !onClick) {
    return (
      <StyledWrapper>
        <a href={href} target={target} onClick={handleClick}>
          <button className="btn">
            {text}
          </button>
        </a>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <button className="btn" onClick={handleClick}>
        {text}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    font-size: 10px;
    background: transparent;
    border: none;
    padding: 0.6em 0.8em;
    color: #06b6d4;
    text-transform: uppercase;
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.5px;
    white-space: nowrap;
    border-radius: 4px;

    @media (min-width: 640px) {
      font-size: 11px;
      padding: 0.7em 1em;
      letter-spacing: 0.8px;
    }

    @media (min-width: 768px) {
      font-size: 12px;
      padding: 0.8em 1.2em;
      letter-spacing: 1px;
    }

    @media (min-width: 1024px) {
      font-size: 12px;
      padding: 0.8em 1.2em;
      letter-spacing: 1px;
    }

    @media (min-width: 1280px) {
      font-size: 13px;
      padding: 0.9em 1.3em;
      letter-spacing: 1.2px;
    }

    @media (min-width: 1536px) {
      font-size: 14px;
      padding: 1em 1.5em;
      letter-spacing: 1.5px;
    }
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #06b6d4;
    transition: 0.5s ease;
    z-index: 1;
  }

  .btn:hover {
    color: #ffffff;
    transition-delay: 0.5s;
    }

  .btn:hover::before {
    width: 100%;
    }

  .btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background: linear-gradient(135deg, #06b6d4, #0f766e);
    transition: 0.4s ease;
    z-index: -1;
  }

  .btn:hover::after {
    height: 100%;
    transition-delay: 0.4s;
  }
`;

export default Button; 