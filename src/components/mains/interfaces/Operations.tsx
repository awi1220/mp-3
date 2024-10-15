import styled from 'styled-components';

const StyledButtons = styled.button`
  background-color: #FF6F61;
  color: #F6F2ED;
  padding: 10px 20px;
  margin: 5px;
  font-size: calc(10px + 1vw);
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover{
    background-color: #033E3E;
    color: #FED8B1;
  }

  @media screen and (max-width: 750px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80px;
  }
`;

interface OperationButtonProps {
    onAdd: () => void;
    onSubtract: () => void;
    onMultiply: () => void;
    onDivide: () => void;
    onPower: () => void;
    onClear: () => void;
}

const OperationButtons = ({
    onAdd,
    onSubtract,
    onMultiply,
    onDivide,
    onPower,
    onClear,
}: OperationButtonProps) => {
    return (
        <div>
            <StyledButtons onClick={onAdd}>+</StyledButtons>
            <StyledButtons onClick={onSubtract}>-</StyledButtons>
            <StyledButtons onClick={onMultiply}>*</StyledButtons>
            <StyledButtons onClick={onDivide}>/</StyledButtons>
            <StyledButtons onClick={onPower}>**</StyledButtons>
            <StyledButtons onClick={onClear}>Clear</StyledButtons>
        </div>
    );
};

export default OperationButtons;