import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  Calculator,
  Header, 
  Form, 
  Results, 
  InputGroup, 
  InputField, 
  Label, 
  RangeInput, 
  Button,
  ResultBox,
  ResultItem,
  InfoIcon,
  Tooltip,
  ButtonContainer
} from './ROICalculatorStyles';

const ROICalculator = () => {
  // Initial state values
  const initialValues = {
    averageOrderValue: 75,
    ordersPerMonth: 500,
    customerReturnRate: 15,
    serviceCost: 997,
    increasedReturnRate: 5,
  };

  // State for form inputs
  const [values, setValues] = useState(initialValues);
  
  // State for results
  const [results, setResults] = useState({
    monthlyRevenue: 0,
    additionalRevenue: 0,
    serviceMultiplier: 0,
    annualReturnOnInvestment: 0,
  });

  // State for tooltips
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Calculate results when values change
  useEffect(() => {
    calculateResults();
  }, [values]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: parseFloat(value) || 0,
    });
  };

  // Calculate ROI results
  const calculateResults = () => {
    const { averageOrderValue, ordersPerMonth, customerReturnRate, serviceCost, increasedReturnRate } = values;
    
    // Monthly customer count
    const uniqueCustomers = ordersPerMonth;
    
    // Current returning customers
    const currentReturningCustomers = uniqueCustomers * (customerReturnRate / 100);
    
    // Additional returning customers with increased rate
    const additionalReturningCustomers = uniqueCustomers * (increasedReturnRate / 100);
    
    // Additional monthly revenue
    const additionalMonthlyRevenue = additionalReturningCustomers * averageOrderValue;
    
    // Additional annual revenue
    const additionalAnnualRevenue = additionalMonthlyRevenue * 12;
    
    // Annual service cost
    const annualServiceCost = serviceCost * 12;
    
    // Service multiplier (return per dollar spent)
    const serviceMultiplier = additionalAnnualRevenue / annualServiceCost;
    
    // Annual ROI percentage
    const annualROI = ((additionalAnnualRevenue - annualServiceCost) / annualServiceCost) * 100;
    
    // Current monthly revenue
    const currentMonthlyRevenue = ordersPerMonth * averageOrderValue;

    setResults({
      monthlyRevenue: currentMonthlyRevenue.toFixed(2),
      additionalRevenue: additionalAnnualRevenue.toFixed(2),
      serviceMultiplier: serviceMultiplier.toFixed(2),
      annualReturnOnInvestment: annualROI.toFixed(2),
    });
  };

  // Reset calculator to initial values
  const handleReset = () => {
    setValues(initialValues);
  };

  // Toggle tooltip visibility
  const toggleTooltip = (tooltipId) => {
    setActiveTooltip(activeTooltip === tooltipId ? null : tooltipId);
  };

  // Tooltip content
  const tooltips = {
    averageOrderValue: "The average value of orders placed by your customers.",
    ordersPerMonth: "The total number of orders your business receives per month.",
    customerReturnRate: "The percentage of customers who return to make another purchase.",
    serviceCost: "The monthly cost of Customer Relounge service.",
    increasedReturnRate: "The estimated increase in customer return rate after implementing Customer Relounge.",
  };

  return (
    <Calculator>
      <Header>Customer Relounge ROI Calculator</Header>
      
      <Form>
        <InputGroup>
          <Label htmlFor="averageOrderValue">
            Average Order Value ($)
            <InfoIcon onClick={() => toggleTooltip('averageOrderValue')}>i</InfoIcon>
            {activeTooltip === 'averageOrderValue' && <Tooltip>{tooltips.averageOrderValue}</Tooltip>}
          </Label>
          <InputField 
            type="number" 
            id="averageOrderValue" 
            name="averageOrderValue" 
            value={values.averageOrderValue} 
            onChange={handleInputChange} 
            min="0"
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="ordersPerMonth">
            Orders per Month
            <InfoIcon onClick={() => toggleTooltip('ordersPerMonth')}>i</InfoIcon>
            {activeTooltip === 'ordersPerMonth' && <Tooltip>{tooltips.ordersPerMonth}</Tooltip>}
          </Label>
          <InputField 
            type="number" 
            id="ordersPerMonth" 
            name="ordersPerMonth" 
            value={values.ordersPerMonth} 
            onChange={handleInputChange} 
            min="0"
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="customerReturnRate">
            Current Customer Return Rate (%)
            <InfoIcon onClick={() => toggleTooltip('customerReturnRate')}>i</InfoIcon>
            {activeTooltip === 'customerReturnRate' && <Tooltip>{tooltips.customerReturnRate}</Tooltip>}
          </Label>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <RangeInput 
              type="range" 
              id="customerReturnRate" 
              name="customerReturnRate" 
              value={values.customerReturnRate} 
              onChange={handleInputChange} 
              min="0" 
              max="100" 
              step="1"
            />
            <span style={{ marginLeft: '10px', width: '40px' }}>{values.customerReturnRate}%</span>
          </div>
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="serviceCost">
            Customer Relounge Monthly Cost ($)
            <InfoIcon onClick={() => toggleTooltip('serviceCost')}>i</InfoIcon>
            {activeTooltip === 'serviceCost' && <Tooltip>{tooltips.serviceCost}</Tooltip>}
          </Label>
          <InputField 
            type="number" 
            id="serviceCost" 
            name="serviceCost" 
            value={values.serviceCost} 
            onChange={handleInputChange} 
            min="0"
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="increasedReturnRate">
            Expected Increase in Return Rate (%)
            <InfoIcon onClick={() => toggleTooltip('increasedReturnRate')}>i</InfoIcon>
            {activeTooltip === 'increasedReturnRate' && <Tooltip>{tooltips.increasedReturnRate}</Tooltip>}
          </Label>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <RangeInput 
              type="range" 
              id="increasedReturnRate" 
              name="increasedReturnRate" 
              value={values.increasedReturnRate} 
              onChange={handleInputChange} 
              min="0" 
              max="50" 
              step="1"
            />
            <span style={{ marginLeft: '10px', width: '40px' }}>{values.increasedReturnRate}%</span>
          </div>
        </InputGroup>

        <ButtonContainer>
          <Button onClick={handleReset}>Reset</Button>
        </ButtonContainer>
      </Form>
      
      <Results>
        <ResultBox>
          <ResultItem>
            <h3>Current Monthly Revenue</h3>
            <p>${Number(results.monthlyRevenue).toLocaleString()}</p>
          </ResultItem>
          <ResultItem>
            <h3>Additional Annual Revenue</h3>
            <p>${Number(results.additionalRevenue).toLocaleString()}</p>
          </ResultItem>
          <ResultItem>
            <h3>Return per $1 Spent</h3>
            <p>${results.serviceMultiplier}</p>
          </ResultItem>
          <ResultItem>
            <h3>Annual ROI</h3>
            <p>{results.annualReturnOnInvestment}%</p>
          </ResultItem>
        </ResultBox>
      </Results>
    </Calculator>
  );
};

export default ROICalculator;