import styled from "styled-components";

const ChatbotBannerStyle = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-top: 90px;
  background: transparent !important;

  /* Fullscreen Spline Background */
  .spline-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    canvas {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
    }
  }

  /* Main content wrapper */
  .banner-content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    height: 100%;
    padding: 0 24px;
  }

  /* Left Side Text Block */
  .chatbot-banner-text {
    max-width: 607px;
    min-height: 760px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-size: 60px;
      font-weight: 700;
      line-height: 80px;
      color: ${({ theme }) => theme.colors.whiteColor};

      span {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 5px;
          width: 100%;
          background: #ffc847;
          border-radius: 2.5px;
        }

        img {
          position: absolute;
          top: -10px;
          right: -30px;
        }
      }
    }

    p {
      font-size: 18px;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-top: 8px;
      margin-bottom: 48px;
    }
  }

  .start-free-form {
    display: flex;
    align-items: center;
    gap: 10px;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 35px;
    padding: 10px;
    max-width: 470px;
    width: 100%;

    .form-input {
      color: ${({ theme }) => theme.colors.title};
      background: transparent;
      border: none;
      outline: none;
      padding: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      flex: 1;
    }

    .bg-blue-btn {
      padding: 12px 40px;
      border: none;
      outline: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .hero-content-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 35px;
    margin-top: 16px;
    list-style: none;
    padding: 0px;

    .list-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      svg {
        color: ${({ theme }) => theme.colors.whiteColor};
        font-size: 22px;
        margin-right: 12px;
      }

      p {
        margin-bottom: 0;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }

  /* Right Spline Container */
  .spline-right {
    width: 50%;
    height: 760px;
    display: flex;
    align-items: center;
    justify-content: center;

    canvas {
      width: 100% !important;
      height: 100% !important;
      object-fit: contain;
    }
  }

  /* Responsive Styles */
  @media screen and (max-width: 1199px) {
    .chatbot-banner-text {
      max-width: 430px;
      .title {
        font-size: 40px;
        line-height: 60px;
      }
    }

    .spline-right {
      height: 600px;
    }
  }

  @media screen and (max-width: 991px) {
    .banner-content-wrapper {
      flex-direction: column;
      padding-top: 40px;
    }

    .chatbot-banner-text {
      min-height: auto;
      align-items: center;
      text-align: center;

      .title {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }

    .spline-right {
      width: 100%;
      height: 400px;
      margin-top: 40px;
    }

    .start-free-form {
      flex-direction: column;

      .form-input,
      .bg-blue-btn {
        width: 100%;
      }
    }

    .hero-content-list {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    .chatbot-banner-text .title {
      font-size: 32px;
      line-height: 44px;
    }

    .spline-right {
      height: 300px;
    }
  }
`;

export default ChatbotBannerStyle;
