import React, { lazy, Suspense } from 'react';

const TalentList = lazy(() => import('./Pages/HomePage'));

import { Routes, Route } from 'react-router-dom';
import LoadingIcon from './Elements/Loading';
import TradeHistory from './Pages/HomePage/tradeHistory';

const YtRoutes: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LoadingIcon />
        </div>
      }
    >
      <Routes>
        <Route path='/' element={<TalentList />} />
        <Route path='/:id' element={<TradeHistory />} />
      </Routes>
    </Suspense>
  );
};
export default YtRoutes;
