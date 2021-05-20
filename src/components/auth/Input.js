import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    padding: 7px;
    border-radius: 3px;
    background-color: #fafafa;
    border: 0.5px solid ${(props) => props.theme.borderColor};
    margin-top: 5px;
    box-sizing: border-box;
    &::placeholder {
        font-size: 12px;
    }
`;

export default Input;