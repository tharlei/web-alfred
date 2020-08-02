import styled from 'styled-components';

interface BackgroundImage {
  backgroundImage: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin-right: -12px;
  margin-left: -12px;
  max-width: 100%;
  overflow: hidden;
`;

export const WelcomeWrapper = styled.div`
  padding: 0;
  
  @media (max-width: 960px) {
    display: none;
  }

  @media (min-width: 960px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.3333333333%;
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  @media (min-width: 1264px) {
    flex: 0 0 58%;
    max-width: 58%;
  }
`;

export const WelcomeContent = styled.div<BackgroundImage>`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${props => props.backgroundImage}) no-repeat;
  background-size: cover;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #be0000cc;
  }

  h1 {
    color: #fff!important;
    z-index: 999;
    font-size: 50px;
    border-bottom: .5px solid #fff;
  }

  p {
    margin-top: 40px;
    color: #fafafa!important;
    opacity: .8;
    font-size: 16px;
    z-index: 999;
  }
`;

export const AccessWrapper = styled.div`
  @media (max-width: 960px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  @media (min-width: 960px) {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  @media (min-width: 1264px) {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
`;

export const AccessContent = styled.div`
  @media (min-width: 960px) {
    max-width: 900px;
  }

  @media (min-width: 1264px) {
    max-width: 1185px;
  }

  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
`;

export const AccessImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  img {
    width: 150px;
  }
`;

export const AccessButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    margin-top: 16px;
    border: none;
    height: 36px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    background-color: var(--red-dark);
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
  }
`;