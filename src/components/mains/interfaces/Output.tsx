import styled from 'styled-components';
interface ResultDisplayProps {
    result: number | null;
}

const StyledOutput = styled.output`
  margin-top: 20px;
  font-size: calc(14px + 1vw);
  color: #033E3E;
`;

const ResultDisplay = ({result}: ResultDisplayProps) => {
    return (
        <StyledOutput style={{ color: result !== null && result < 0 ? 'red' : '#033E3E' }}>
            {result !== null ? result : ''}
        </StyledOutput>
    );
};

export default ResultDisplay;
