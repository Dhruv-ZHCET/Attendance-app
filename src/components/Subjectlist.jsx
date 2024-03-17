import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledSidebar = styled(Sidebar)`
  width: 250px;
`;

const StyledItem = styled(Sidebar.Item)`
  padding: 10px;
  color: white;
  transition: transform 0.3s ease; /* Transition effect added */
  
  &:hover {
    background-color: #333;
    color: white;
    transform: translateX(5px); /* Move the item slightly to the right on hover */
  }
`;

const StyledHeading = styled.h2`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const colors = ['#FF5733', '#FFC300', '#33FF57', '#33A7FF', '#FF3366', '#FF5733']; // Array of different colors

function Subjectlist() {
  const navigate = useNavigate();
  return (
    <div>
      <StyledHeading>Subjects</StyledHeading>
      <StyledSidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* Map through each item and assign a different color */}
            {['Signal and System', 'Discrete Mathematics', 'Numerical Analysis and Probability', 'Software Engineering', 'Design and Analysis of Algorithm', 'Computer Architecture'].map((subject, index) => (
              <StyledItem key={index} style={{ 
                background: `linear-gradient(135deg, ${colors[index % colors.length]}, #333)`,
                border: `2px solid ${colors[index % colors.length]}`,
                borderRadius: '5px'
              }}
              onClick={()=>
              {
                navigate(`/${subject}`)
              }}>
                {subject}
              </StyledItem>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </StyledSidebar>
    </div>
  );
}

export default Subjectlist;
