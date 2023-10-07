import React, {useState} from 'react'
import lightSwitch from '../../../public/assets/icons/light-switch.svg'
import darkSwitch from '../../../public/assets/icons/dark-switch.svg'
import bgDark from '../../../public/assets/images/bg-toggle-dark.svg'
import bgLight from '../../../public/assets/images/bg-toggle-light.svg'

function DarkModeToggle({handelTheme}) {
    const [darkMode, setDarkMode] = useState(false)

    function handleDark() {
        handelTheme(!darkMode)
    }

    return (
        <button className='flex w-[62px] h-[28px] rounded-full relative overflow-hidden' onClick={() => {
            setDarkMode(!darkMode), handleDark()
        }}>
            <div className='flex items-center'>
                <img
                    className={`w-[30px] h-[30px] relative transition__toggle__switch ${darkMode ? 'right-10' : '-right-8'}`}
                    src={lightSwitch} alt=""/>
                <img
                    className={`w-[30px] h-[30px] relative transition__toggle__switch ${darkMode ? 'right-7' : '-right-10'}`}
                    src={darkSwitch} alt=""/>
            </div>
            <div className='flex'>
                <img className={`absolute -z-10 transition__toggle__bg ${darkMode ? 'right-16' : 'right-0'}`}
                     src={bgLight} alt=""/>
                <img className={`absolute -z-10 transition__toggle__bg ${darkMode ? 'left-0' : 'left-16'}`} src={bgDark}
                     alt=""/>
            </div>
        </button>
    )
}

export default DarkModeToggle
