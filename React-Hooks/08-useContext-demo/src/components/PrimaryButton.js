import React, { useContext } from 'react';
import {ThemeContext} from '../ThemeContext';

export default function PrimaryButton(){
    const theme = useContext(ThemeContext)
    return(
        <button style={{background: theme.background}}>Primary</button>
    )
}