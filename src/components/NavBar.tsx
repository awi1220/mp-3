import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledNav = styled.nav `
    width: 30vw;
    float: left;
    background-color: #FED8B1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    //Media query for screens smaller than 750px
    @media (max-width: 750px) {
      width: 100%;
      flex-direction: row;
      height: auto;
      float: none;
      font-size: calc(5px + 1.5vw);
      padding: 20px;
      z-index: 10;
    }
`;

const StyledUl = styled.ul `
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: #FED8B1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    @media (max-width: 750px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      padding: 0;
      margin: 0;
    }
`;

const StyledLi = styled.li`
    margin: 5px 0;
    @media (max-width: 750px) {
      list-style: none;
      margin: 0;
      flex-grow: 1;
      text-align: center;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #033E3E;
    font-size: calc(14px + 0.5vw);
    display: block;
    text-align: center;
    padding: 10px 0;
    /*button effect*/
    border-radius: 8px;
    background-color: #FF6F61;
    border: 2px solid #033E3E;
    margin: 10px auto;
    width: 80%;
    &:hover {
      background-color: #033E3E;
      color: #FED8B1;
    }
    @media (max-width: 750px) {
      text-decoration: none;
      color: #033E3E;
      display: block;
      padding: 10px 15px;
      font-size: calc(8px + 1vw);
      width: auto;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl id="nav-bar">
                <StyledLi className="navi"><StyledLink to="/">Home</StyledLink></StyledLi>
                <StyledLi className="navi"><StyledLink to="/education">Education</StyledLink></StyledLi>
                <StyledLi className="navi"><StyledLink to="/experiences">Experiences</StyledLink></StyledLi>
                <StyledLi className="navi"><StyledLink to="/skills">Skills</StyledLink></StyledLi>
                <StyledLi className="navi"><StyledLink to="/projects">Projects</StyledLink></StyledLi>
                <StyledLi className="navi"><StyledLink to="/references">References</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}