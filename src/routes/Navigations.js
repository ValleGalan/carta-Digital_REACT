import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import routes from "./routes";
import {map} from "lodash";
export  function Navigations() {
  console.log( "rutas: ", routes)
  return (
    <BrowserRouter>
      <Routes>
        {map(routes , (route, index) =>(
          <Route 
            key={index} 
            path={route.path} 
            element= {
              <route.layout>
                <route.component></route.component>
              </route.layout>
            }  
          > 
          </Route>
        ) )}
      </Routes>
    </BrowserRouter>
  )
}
