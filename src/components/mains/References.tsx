import styled from 'styled-components';
import {MainDiv} from "./Home.tsx";
import {StyledH2} from "./Home.tsx";

const StyledTable = styled.table`
  table-layout: fixed;
  margin-bottom: 20px;
  border:1px solid black;
  width: 100%;
  th, td {
    border: 1px solid black;
  }
`

export default function ReferencesPage() {
    return (
        <MainDiv>
            <StyledH2>Professional</StyledH2>
            <StyledTable>
                <tr>
                    <th><b>Type</b></th>
                    <th><b>Contact</b></th>
                    <th><b>Country</b></th>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>6178403175</td>
                    <td>United States</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>awi1220@bu.edu</td>
                    <td>N/A</td>
                </tr>
            </StyledTable>
            <br/>
            <StyledH2>Personal</StyledH2>
            <StyledTable>
                <tr>
                    <th><b>Type</b></th>
                    <th><b>Contact</b></th>
                    <th><b>Country</b></th>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>6178403175</td>
                    <td>United States</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>amywiiii1220@gmail.com</td>
                    <td>N/A</td>
                </tr>
            </StyledTable>
        </MainDiv>
    )
}