import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import styled from 'styled-components';

const StyledSidebar = styled(Sidebar)`
  background-color: #f0f0f0;
  width: 250px;
`;

const StyledItem = styled(Sidebar.Item)`
  padding: 10px;
  color: #333;
  &:hover {
    background-color: #ddd;
  }
`;

function Subjectlist() {
  return (
    <StyledSidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <StyledItem href="#">
            Signal and System
          </StyledItem>
          <StyledItem href="#" label="" labelColor="dark">
            Discrete Mathematics
          </StyledItem>
          <StyledItem href="#" label="">
            Numerical Analysis and Probability
          </StyledItem>
          <StyledItem href="#">
            Software Engineering
          </StyledItem>
          <StyledItem href="#">
            Design and Analysis of Algorithm
          </StyledItem>
          <StyledItem href="#">
            Computer Architecture
          </StyledItem>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </StyledSidebar>
  );
}

export default Subjectlist;
