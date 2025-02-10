import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 15px;
    border-radius: 10px;
    width: 40px;
    height: 40px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 12px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #2a2b2f;
    border-radius: 8px 12px;
    padding: 8px;
    border: 1px solid #0a66c2;
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
  .layer {
    width: 40px;
    height: 40px;
    transition: transform 0.3s;
  }
  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }
  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #1da1f2;
    border-color: #1da1f2;
  }

  .icon:hover.layer span {
    box-shadow: -1px 1px 3px #1da1f2;
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
    transform: translate(5px, -5px);
  }
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .layer span.fab {
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    fill: #1da1f2;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .layer span.fab svg {
    width: 18px;
    height: 18px;
  }

  .user {
    display: flex;
    gap: 8px;
  }
  .img {
    width: 40px;
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid #0a66c2;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .name {
    font-size: 15px;
    font-weight: 700;
    color: #0a66c2;
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

  .icon .layer {
    width: 45px;
    height: 45px;
    border: 3px solid #0a66c2;
    border-radius: 50%;
    transition: transform 0.3s, border 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 15px rgba(10, 102, 194, 0.7), 0 0 20px rgba(10, 102, 194, 0.5);
    position: relative;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
    box-shadow: 0 0 30px rgba(10, 102, 194, 1), 0 0 40px rgba(10, 102, 194, 0.7);
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
    color: #0a66c2;
    border-color: #0a66c2;
  }

  .icon:hover .layer span {
    box-shadow: -1px 1px 3px #0a66c2;
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
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
    transform: translate(5px, -5px);
  }

  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }

  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }

  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .layer span.fab {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a66c2;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      #0a66c2 0%,
      #0077b5 25%,
      #0a66c2 50%,
      #0077b5 75%,
      #0a66c2 100%
    );
  }
`;

interface LinkedInTooltipProps {
  profileUrl: string;
  initials: string;
  name: string;
  username: string;
  connections: string;
}

const LinkedInTooltip: React.FC<LinkedInTooltipProps> = ({
  profileUrl,
  initials,
  name,
  username,
  connections,
}) => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">{initials}</div>
              <div className="details">
                <div className="name">{name}</div>
                <div className="username">@{username}</div>
              </div>
            </div>
            <div className="about">{connections}</div>
          </div>
        </div>
        <div className="text">
          <a className="icon" href={profileUrl}>
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="fab fa-linkedin">
                <svg viewBox="0 0 448 512" width="1em" height="1em">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </span>
            </div>
            <div className="text">LinkedIn</div>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default LinkedInTooltip; 