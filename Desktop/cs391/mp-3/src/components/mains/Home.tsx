import styled from 'styled-components';

export const MainDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FED8B1;
  color: #033E3E;
  padding: 20px;
  height: 100vh;
  //Media query for screens smaller than 750px
  @media (max-width: 750px) {
    width: 100%;
    float: none;
    padding: 20px;
    box-sizing: border-box;
    font-size: calc(5px + 1.5vw);
  }
`

export const StyledH2 = styled.h2`
    margin-bottom: 10px;
    text-align: center;
`

const StyledImg = styled.img`
    @media (max-width: 750px) {
      width: 50%; 
      max-width: 150px; 
      height: auto; 
      display: block;
      margin: 0 auto;
    }
`

export default function HomePage() {
    return (
        <MainDiv>
            <StyledH2>Home</StyledH2>
            <StyledImg src="../../../public/headshot.jpg" alt="headshot of Amy Wi" width="450" height="650" />
            <p>
                My name is Ah Hyun Wi but my preferred name is Amy! I'm currently finishing
                my Master's degree in the BA/MS program in Biology at <a href="https://www.bu.edu/" target="_blank">Boston University</a>. I'm also a
                Teaching Fellow in the BI 311 General Microbiology at BU. I am searching for opportunities
                in fields such as biotechnology, life science consulting, and project management. With a
                proactive approach and a continuous learning mindset, I am committed to ensuring the integrity
                and reliability of biotech innovations and advancing the standards of quality in the industry.
            </p>
            <br/>
            <p>Welcome to my website where you will be able to find more information about me.</p>
        </MainDiv>
    )
}