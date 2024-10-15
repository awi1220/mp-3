import {MainDiv} from "./Home.tsx";
import {StyledH2} from "./Home.tsx";
import {StyledH3} from "./Education.tsx";

export default function SkillsPage() {
    return (
        <MainDiv>
            <StyledH2>Skills</StyledH2>
            <br/>
            <dl/>
                <StyledH3><em>Languages</em></StyledH3>
                <dd>- Bilingual in English and Korean</dd>
                <dd>- Intermediate Spanish</dd>
                <dd>- Obtained a Business Translation Diploma for English-Korean</dd>
            <br/>
            <StyledH3><em>Laboratory</em></StyledH3>
                <dd>- Molecular Spectroscopy (Vis, UV-Vis)</dd>
                <dd>- Atomic APEC. (AA, AES)</dd>
                <dd>- NMR Spectrometer</dd>
                <dd>- PCR</dd>
                <dd>- Gel Electrophoresis</dd>
                <dd>- Mutant Screening in Genetics</dd>
                <dd>- Genetic Testing using DNA-based markers</dd>
            <br/>
            <StyledH3><em>Skills and Proficiencies</em></StyledH3>
                <dd>- Analytical Glassware and Technology</dd>
                <dd>- Spreadsheets and Data Tabulation</dd>
                <dd>- Analytical Titration</dd>
                <dd>- Good Laboratory Practice</dd>
                <dd>- Literature Reviews</dd>
                <dd>- Strong Interpersonal Skills</dd>
                <dd>- Python</dd>
                <dd>- JavaScript</dd>
                <dd>- Statistical Data Analysis</dd>
                <dd>- Proactive and Self-Motivated</dd>
                <dd>- Project Planning</dd>
                <dd>- Public Speaking</dd>
                <dd>- Leadership</dd>
        </MainDiv>
    );
}