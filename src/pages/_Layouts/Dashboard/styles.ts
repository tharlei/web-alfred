import styled from 'styled-components';

/**
 * NAV
 */

export const Nav = styled.nav`
  background: #fff;
  height: 100vh;
  top: 0px;
  transform: translateX(0%);
  width: 256px;
  max-height: calc(100% - 0px);
  position: fixed;
  z-index: 6;
  box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);

  @media (max-width: 960px) {
    display: none;
  }
`;


export const WrapperImage = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
  }

  :after {
    margin-top: 20px;
    content: "";
    height: 1px;
    width: calc(100% - 30px);
    background-color: hsla(0,0%,71%,.3);
  }
`;

export const WrapperItems = styled.div`
  position: relative;
  height: calc(100vh - 75px);
  overflow: auto;
  width: 260px;
  z-index: 4;
  padding-bottom: 30px;
`;

export const List = styled.ul`
  margin-top: 20px;
  display: block;

  .active a {
    background-color: var(--red-dark);
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px var(--red-darker);
    color: #fff;
  }

  .active a svg {
    color: #fff;
  }

  .active a:hover {
    background-color: var(--red-dark);
  }
`;

export const Item = styled.li`
  a {
    margin: 10px 15px 0;
    border-radius: 3px;
    color: #3c4858;
    padding-left: 10px;
    padding-right: 10px;
    text-transform: capitalize;
    font-size: 13px;
    padding: 10px 15px;
    transition: all .15s ease-in;
    display: flex;
    text-decoration: none;

    :hover {
      background: rgba(200,200,200,0.3);
    }
  }

  svg {
    font-size: 16px;
    float: left;
    margin-right: 15px;
    line-height: 30px;
    margin-top: 5px;
    width: 30px;
    text-align: center;
    color: #a9afbb;
  }

  p {
    margin: 0;
    line-height: 30px;
    font-size: 14px;
    position: relative;
    display: block;
    height: auto;
    white-space: nowrap;
  }
`;

/**
 * HEADER
 */

export const Header = styled.header`
  height: 64px;
  margin-top: 0px;
  transform: translateY(0px);
  left: 256px;
  right: 0px;
  background-color: var(--red-dark);
  border-color: var(--red-dark);
  display: flex;
  position: fixed;
  top: 0;
  z-index: 5;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

  @media (max-width: 960px) {
    left: 0px;
  }
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
  padding: 4px 16px;
  width: 100%;
  justify-content: flex-end;
  color: #fff;

  span {
    padding: 10px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const UserIcon = styled.div`
  height: 48px;
  width: 48px;
  font-size: 24px;

  :hover {
    background: rgba(0,0,0,0.1);
    border-radius: 50%;
  }
`;

export const OptionsIcon = styled.div`
  width: 40px;
  cursor: pointer;
`;

/**
 * MAIN
 */

export const Main = styled.main`
  background: #fafafa;
  padding: 64px 0px 0px 256px;
  flex: 1 1 auto;
  max-width: 100%;

  @media (max-width: 960px) {
    padding: 64px 0px 0px 0px;
  }
`;
