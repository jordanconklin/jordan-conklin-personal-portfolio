import React from "react"
import { HiDownload } from "react-icons/hi"

const ResumeButton = () => {
  return (
    <a
      href="/Jordan-Conklin-Software-Engineer-Resume.pdf"
      download
      className="flex items-center justify-center gap-2 px-6 py-3 text-neutral-100 font-semibold bg-teal-600 rounded shadow hover:bg-teal-700 transition-colors"
    >
      Download Resume
      <HiDownload size={20} />
    </a>
  )
}

export default ResumeButton 