import React, { useState, useEffect } from "react";

export default function SelectTitle() {
  const titles = ["Hello", "Yo!", "Welcome", "Salam"];

  const [index, setIndex] = useState(0);

  // on every rerender this useEffect will be called
  useEffect(() => {
      document.title = titles[index];
      console.log('useEffect called state changed')
  })

  function updateTitle() {
    setIndex(Math.floor(Math.random() * titles.length));
  }

  return <button onClick={updateTitle}>Change Title</button>;
}