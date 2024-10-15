import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';

import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import NavBar from './components/NavBar.tsx';
import HomePage from "./components/mains/Home.tsx";
import EducationPage from "./components/mains/Education.tsx";
import ExperiencesPage from "./components/mains/Experiences.tsx";
import SkillsPage from "./components/mains/Skills.tsx";
import ReferencesPage from "./components/mains/References.tsx";
import MainCalculator from "./components/mains/MainCalculator.tsx";

import styled from "styled-components";

const PageWrapper=styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
`;

const Container=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: #FED8B1;

    @media screen and (max-width: 750px) {
      flex-direction: column;
    }
`;

const Root = () => {
    return (
        <PageWrapper>
            <Header />
            <Container>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/education" element={<EducationPage/>} />
                    <Route path="/experiences" element={<ExperiencesPage/>} />
                    <Route path="/skills" element={<SkillsPage/>} />
                    <Route path="/projects" element={<MainCalculator/>} />
                    <Route path="/references" element={<ReferencesPage/>} />
                </Routes>
            </Container>
            <Footer />
        </PageWrapper>
    );
}

const router = createBrowserRouter(
    [{path:"*", Component: Root}]
);

export default function App() {
    return (
        <RouterProvider router={router}/>
    );
}