import React from 'react'
import Button from '@material-ui/core/Button';
import "./App.scss"
import {Navigations} from "./routes";

export default function App() {
  return (
    <div className='App'>
      <Button variant="contained"  className='App__button-color'> Primary</Button>
      <Navigations></Navigations>
    </div>
  )
}
