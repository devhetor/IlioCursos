import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import PrimaryButton from './PrimaryButton';

export default function SelectTitle() {
  const titles = ["Hello", "Yo!", "Welcome", "Salam"];

  const [index, setIndex] = useState(0);
  const theme = useContext(ThemeContext);

  // on every rerender this useEffect will be called
  useEffect(() => {
      document.title = titles[index];
      console.log('useEffect called state changed')
  })

  function updateTitle() {
    setIndex(Math.floor(Math.random() * titles.length));
  }

  return (
    <>
  <button
  style={{background: theme.background}}
  onClick={updateTitle}>Change Title</button>
  <PrimaryButton/>
  </>
  )
}