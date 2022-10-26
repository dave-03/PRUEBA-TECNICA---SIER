import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataTable from '../Component/DataTable'




function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DataTable></DataTable>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter