import React, { useCallback } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"

export default function TextEditor() {
    const wrapperRef = useCallback(wrapper => {
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill("#container", { theme: "snow"})
    }, [])
  return (
    <div id="container" ref={wrapperRef}></div>
  )
}
