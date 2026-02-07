import Logo from '../Logo/logo'
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";




export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <div className='flex justify-center items-center'>
                    <Logo/>
                </div>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:tnmypl2003@gmail.com">contact@tnmypl2003.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} Tanmoy - All rights reserved.</p>
                {/* <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/tanmoy-paul01" className="border border-blue-600 bg-blue-500/10 hover:bg-blue-500/20 py-2 px-8 w-max flex items-center justify-between gap-2  rounded-sm mx-auto hover:bg-black duration-500 dark:text-black dark:bg-[#1EFF00] dark:hover:bg-[#15B100] transition">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/tanmoy-paul-1a3676320/" className="border border-blue-600 bg-blue-500/10 hover:bg-blue-500/20 py-2 px-8 w-max flex items-center justify-between gap-2  rounded-sm mx-auto hover:bg-black duration-500 dark:text-black dark:bg-[#1EFF00] dark:hover:bg-[#15B100] transition">LinkedIn</a></li>
                </ul> */}
                <div className="flex items-center gap-3 justify-center mt-4 sm:mt-0">

                    <a href="https://github.com/tanmoy-paul01" target="_blank" className=' rounded-sm h-9 w-9 flex items-center justify-center text-xl dark:text-black dark:bg-[#1EFF00]  dark:hover:bg-[#15B100]  cursor-pointer transition bg-blue-500/20 hover:bg-blue-500/40'>
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/tanmoy-paul-1a3676320/" target="_blank" className=' rounded-sm h-9 w-9 flex items-center justify-center text-xl dark:text-black dark:bg-[#1EFF00]  dark:hover:bg-[#15B100]  cursor-pointer transition bg-blue-500/20 hover:bg-blue-500/40'>
                        <FaLinkedin />
                    </a>

                    <a href="https://wa.me/917557882856" target="_blank" className=' rounded-sm h-9 w-9 flex items-center justify-center text-xl dark:text-black dark:bg-[#1EFF00]  dark:hover:bg-[#15B100]  cursor-pointer transition bg-blue-500/20 hover:bg-blue-500/40'>
                        <FaWhatsapp />
                    </a>

                    <a href="https://www.facebook.com/tanmoy.paul.218981/" target="_blank" className=' rounded-sm h-9 w-9 flex items-center justify-center text-xl dark:text-black dark:bg-[#1EFF00]  dark:hover:bg-[#15B100]  cursor-pointer transition bg-blue-500/20 hover:bg-blue-500/40'>
                        <FaFacebook />
                    </a>

                    <a href="https://www.instagram.com/tanmoy_paul18/" target="_blank" className=' rounded-sm h-9 w-9 flex items-center justify-center text-xl dark:text-black dark:bg-[#1EFF00]  dark:hover:bg-[#15B100]  cursor-pointer transition bg-blue-500/20 hover:bg-blue-500/40'>
                        <FaInstagram  />
                    </a>

                </div>

            </div>
        </div>
    )
}