import React, { useContext } from 'react'
import {ThemeContext} from '../context/ThemeContext'
import './ButtonTheme.css'

export default function ButtonTheme() {

    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <button
            className={theme ? "buttonToggle buttonToggle--light" : "buttonToggle buttonToggle--dark"}
            onClick={toggleTheme}
        >
            {theme ? "🌚" : "🌝"}
        </button>
    )
}