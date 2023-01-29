import React, {  lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('../_container/landing-page'));
const Inspiration = lazy(() => import('../_container/inspiration'));
const MainRoute = () => {

    return (
        <Suspense>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/inspiration' element={<Inspiration />} />
            </Routes>
        </Suspense>
    );
};

export default MainRoute;
