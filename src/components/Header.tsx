import styled from 'styled-components';

const HeaderWrapper = styled.header`
    padding: 20px;
    background-color: #4E7777;
    color: #F6F2ED;
    text-shadow: 2px 2px 2px #333333;
    text-align: left;
    //Media query for screens smaller than 750px
    @media (max-width: 750px) {
      text-align: center;
      padding: 20px;
      background-color: #4E7777;
      color: #F6F2ED;
      text-shadow: 2px 2px 2px #333333;
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Amy (Ah Hyun) Wi</h1>
            <p>Amy Wi's Online Resume</p>
        </HeaderWrapper>
    );
}
