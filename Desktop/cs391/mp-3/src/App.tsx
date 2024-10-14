import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';

import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import NavBar from './components/NavBar.tsx';
import HomePage from "./components/mains/Home.tsx";
import EducationPage from "./components/mains/Education.tsx";
import ExperiencesPage from "./components/mains/Experiences.tsx";
import SkillsPage from "./components/mains/Skills.tsx";
import ReferencesPage from "./components/mains/References.tsx";


const Root = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/education" element={<EducationPage/>} />
                <Route path="/experiences" element={<ExperiencesPage/>} />
                <Route path="/skills" element={<SkillsPage/>} />
                {/*<Route path="/" element={</>} />*/}
                <Route path="/references" element={<ReferencesPage/>} />
            </Routes>
            <Footer />
        </div>
    )
}

const router = createBrowserRouter(
    [{path:"*", Component: Root}]
)

export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}