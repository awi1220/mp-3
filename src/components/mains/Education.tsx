import styled from 'styled-components';
import {MainDiv} from "./Home.tsx";
import {StyledH2} from "./Home.tsx";

export const StyledH3 = styled.h3`
    margin-bottom: 10px;
    text-align: center;
`;

export const StyledH5 = styled.h5`
    margin-bottom: 10px;
    text-align: center;
`;

export default function EducationPage() {
    return (
        <MainDiv>
            <StyledH2>Educational Background</StyledH2>
            <br/>
            <dl/>
                <StyledH3><em>Boston University, MA, United States</em></StyledH3>
                <dd>- MS in Biology, as part of the BA/MS dual degree offered at BU</dd>
                <dd>- BA in Biology, with a minor in Computer Science</dd>
                <br/>
                    <StyledH5>Dec, 2024</StyledH5>
                <br/>
                <StyledH3><em>British School Manila, Philippines</em></StyledH3>
                <dd>- <a href="https://www.ibo.org/programmes/diploma-programme/">International Baccalaureate Diploma</a> (IB) score of 40/45</dd>
                <dd>- Higher Level (HL): Biology (6), Chemistry (6), Psychology (6)</dd>
                <dd>- Standard Level (SL): Language & Literature (7), Mathematics (7), Spanish (6)</dd>
                <dd>- Extended Essay (EE) + Theory of Knowledge (TOK) (2) </dd>
                <br/>
                    <StyledH5>June, 2020</StyledH5>
        </MainDiv>
    );
}