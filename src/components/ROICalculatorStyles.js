import styled from 'styled-components';

// Main container
export const Calculator = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
`;

// Header
export const Header = styled.h1`
  text-align: center;
  color: #1a49b5;
  background-color: #f9faff;
  padding: 20px;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: 1px solid #e9ecef;
`;

// Form section
export const Form = styled.div`
  padding: 20px 30px;
  background-color: #fff;
`;

// Results section
export const Results = styled.div`
  padding: 20px 30px;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
`;

// Input group
export const InputGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

// Label
export const Label = styled.label`
  display: flex;
  font-weight: 500;
  margin-bottom: 6px;
  color: #495057;
  font-size: 0.95rem;
  align-items: center;
  position: relative;
`;

// Info icon
export const InfoIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #1a49b5;
  color: white;
  font-size: 11px;
  margin-left: 6px;
  cursor: pointer;
  font-style: italic;
  font-weight: bold;
`;

// Tooltip
export const Tooltip = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 10;
  max-width: 300px;
  padding: 8px 12px;
  background-color: #333;
  color: white;
  border-radius: 4px;
  font-size: 0.8rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }
`;

// Input field
export const InputField = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  
  &:focus {
    border-color: #1a49b5;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(26, 73, 181, 0.25);
  }
  
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

// Range input
export const RangeInput = styled.input`
  width: 100%;
  height: 6px;
  background: #e9ecef;
  border-radius: 5px;
  outline: none;
  margin: 10px 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #1a49b5;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #1a49b5;
    cursor: pointer;
    border: none;
  }
`;

// Button
export const Button = styled.button`
  background-color: #1a49b5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'Montserrat', sans-serif;
  
  &:hover {
    background-color: #0d3d9e;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(26, 73, 181, 0.25);
  }
`;

// Button container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

// Result box
export const ResultBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

// Result item
export const ResultItem = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  
  h3 {
    margin: 0 0 10px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #6c757d;
  }
  
  p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a49b5;
  }
`;