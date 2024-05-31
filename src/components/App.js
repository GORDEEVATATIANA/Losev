import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GalleryPage from './GalleryPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default App;
