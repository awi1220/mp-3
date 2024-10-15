import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  font-size: calc(12px + 0.5vw);
  border: 1px solid #033E3E;
  border-radius: 10px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const InputField = ({ label, value, onChange }: InputFieldProps) => {
    return (
        <div>
            <label>{label}</label>
            <StyledInput
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default InputField;
