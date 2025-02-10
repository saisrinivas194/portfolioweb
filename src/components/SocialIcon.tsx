import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ color: string }>`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px;
    border-radius: 10px;
    width: 35px;
    height: 35px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 6px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 10px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #2a2b2f;
    border-radius: 8px 12px;
    padding: 8px;
    border: 1px solid ${props => props.color};
  }

  .tooltip-container:hover .tooltip {
    top: -130px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }

  .icon .layer {
    width: 35px;
    height: 35px;
    border: 2px solid ${props => props.color};
    border-radius: 50%;
    transition: transform 0.3s, border 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 12px ${props => props.color}b3, 0 0 16px ${props => props.color}80;
    position: relative;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
    box-shadow: 0 0 25px ${props => props.color}, 0 0 35px ${props => props.color}b3;
  }

  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: ${props => props.color};
    border-color: ${props => props.color};
  }

  .icon:hover .layer span {
    box-shadow: -1px 1px 3px ${props => props.color};
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
    font-size: 13px;
  }

  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }
  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(4px, -4px);
  }
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(8px, -8px);
  }
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(12px, -12px);
  }
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(16px, -16px);
  }

  .layer span.fab {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.color};
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      ${props => props.color} 0%,
      ${props => props.color}e6 25%,
      ${props => props.color} 50%,
      ${props => props.color}e6 75%,
      ${props => props.color} 100%
    );
  }

  .layer span.fab svg {
    width: 15px;
    height: 15px;
    fill: #fff;
  }

  .user {
    display: flex;
    gap: 8px;
  }

  .img {
    width: 35px;
    height: 35px;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid ${props => props.color};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  .name {
    font-size: 15px;
    font-weight: 700;
    color: ${props => props.color};
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
    font-size: 14px;
  }

  .about {
    color: #ccc;
    padding-top: 4px;
    font-size: 13px;
  }
`;

interface TooltipData {
  initials: string;
  name: string;
  username: string;
  description: string;
}

interface SocialIconProps {
  type: 'github' | 'linkedin' | 'email' | 'phone' | 'twitter';
  url: string;
  tooltip: TooltipData;
  color: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type, url, tooltip, color }) => {
  const getIcon = () => {
    switch (type) {
      case 'github':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'email':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
          </svg>
        );
      case 'phone':
        return (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <StyledWrapper color={color}>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">{tooltip.initials}</div>
              <div className="details">
                <div className="name">{tooltip.name}</div>
                <div className="username">@{tooltip.username}</div>
              </div>
            </div>
            <div className="about">{tooltip.description}</div>
          </div>
        </div>
        <a className="icon" href={url} target="_blank" rel="noopener noreferrer">
          <div className="layer">
            <span />
            <span />
            <span />
            <span />
            <span className="fab">
              {getIcon()}
            </span>
          </div>
        </a>
      </div>
    </StyledWrapper>
  );
};

export default SocialIcon; 