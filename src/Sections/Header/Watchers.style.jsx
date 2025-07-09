import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 10px 0;
  background-color:rgb(255, 255, 255);
  font-size: 14px;
  font-weight: bold;
`;

export const UtilityBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 10px 0;
  background-color: #ffffff;
  font-size: 16px;
`;

export const MainMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 10px 0;
  background-color: #ffffff;
`;

export const MenuItem = styled.div`
  position: relative;

  &:hover > ul {
    display: block;
  }
`;

export const SectionTitle = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  padding: 10px 0;
  margin: 0;
  border: 1px solid #ccc;
  list-style: none;
  z-index: 999;
  min-width: 220px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);

  li {
    padding: 8px 16px;
    font-size: 14px;
    white-space: nowrap;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
