import React from 'react'
import { Routes, Route, Navigate } from 'react-router'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Films from '../pages/Films'
import FilmPage from '../pages/FilmPage'



const MainRoutes = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films">
          <Route index element={<Films />} />
          <Route path=":id" element={<FilmPage />} /> 
        </Route>

        <Route path='404' element={<NotFound />} />
        <Route path="*" element={<Navigate to='404' replace />} />
    </Routes>
  )
}

export default MainRoutes