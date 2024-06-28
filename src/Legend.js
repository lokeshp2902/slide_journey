import React from 'react';
import styled from 'styled-components';

const Legend = ({ items }) => {
  return (
    <LegendContainer>
      {items.map((item, index) => (
        <LegendItem key={index}>
          <LegendColor style={{ backgroundColor: item.color }} />
          <LegendLabel>{item.label}</LegendLabel>
        </LegendItem>
      ))}
    </LegendContainer>
  );
};

export default Legend;

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const LegendLabel = styled.span`
  font-size: 12px;
`;
