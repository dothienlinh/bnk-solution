import { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import Image from '../Image/Image'
import logo from '../../assets/images/logo.png'
import MenuHeader from '../MenuHeader/MenuHeader'

function Header() {
  const [language, setLanguage] = useState('EN')
  const [openMenuLanguage, setOpenMenuLanguage] = useState(false)

  const menuLanguageRef = useRef()
  const btnLanguageRef = useRef()
  const headerRef = useRef()

  const toggleBtn = () => {
    setOpenMenuLanguage(!openMenuLanguage)
  }

  useEffect(() => {
    let prevScroll = 0
    let currentScroll = 0

    const handler = () => {
      currentScroll = document.documentElement.scrollTop

      if (prevScroll > currentScroll) {
        headerRef.current.classList.add('scrollUp')
        headerRef.current.classList.remove('scrollDown')
        prevScroll = currentScroll
      } else {
        headerRef.current.classList.remove('scrollUp')
        headerRef.current.classList.add('scrollDown')
        prevScroll = currentScroll
      }
    }

    window.addEventListener('scroll', handler)

    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handler = (event) => {
      if (!btnLanguageRef.current.contains(event.target)) {
        toggleBtn()
      }
    }

    if (openMenuLanguage) {
      window.addEventListener('click', handler)
    }

    return () => window.removeEventListener('click', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openMenuLanguage])

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="max-w-[1140px] px-[15px] mx-auto h-full flex justify-between items-center">
          <a href="/" className="inline-block mr-[90px]">
            <Image src={logo} />
          </a>

          <MenuHeader />
        </div>
        <div className="absolute right-10 top-10 ">
          <button
            className={`font-normal text-[#333] flex items-center justify-center gap-1 px-3 py-[6px] border border-[#333] rounded opacity-50 transition duration-300 hover:bg-[#5a6268] hover:border-[#5a6268] hover:text-white ${
              openMenuLanguage ? 'bg-[#5a6268] border-[#5a6268] text-white' : ''
            }`}
            ref={btnLanguageRef}
            onClick={toggleBtn}
          >
            {language}
            <IoMdArrowDropdown />
          </button>
          {openMenuLanguage && (
            <div
              className="absolute top-10 right-[-30px] py-2 bg-white min-w-40 border border-[#00000026] rounded"
              ref={menuLanguageRef}
            >
              <p
                className="px-6 py-1 hover:text-[#16181b] hover:bg-[#f8f9fa] cursor-pointer"
                onClick={() => setLanguage('EN')}
              >
                EN
              </p>
              <p
                className="px-6 py-1 hover:text-[#16181b] hover:bg-[#f8f9fa] cursor-pointer"
                onClick={() => setLanguage('JP')}
              >
                JP
              </p>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
