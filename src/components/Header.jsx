export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="./assets/profile-img.png" alt="" className="rounded-full w-32 border border-black" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m Tanmoy Paul
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Full Stack <span className="dark:text-[#1EFF00] text-blue-500">Web</span> Developer</h1>
            <p className="max-w-2xl mx-auto font-Ovo">Building scalable web apps with MERN, Java & SQL — turning real-world problems into elegant digital solutions.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-sm bg-gradient-to-r dark:bg-[#1EFF00] dark:hover:border-[#15B100] dark:hover:bg-[#15B100] dark:text-black flex items-center gap-2 dark:border-transparent hover:border-blue-600 bg-blue-400 hover:bg-blue-500/20 transition">
                    contact me <img src="./assets/arrow-icon.png" alt="" className="w-3" />
                </a>

                <a href="./assets/dev-icon.png" download
                    className="px-10 py-2.5 rounded-sm border dark:border-green-500/30 dark:hover:bg-green-500/20 transition dark:bg-green-500/10 flex items-center gap-2 bg-white dark:text-white border-blue-600 bg-blue-500/10 hover:bg-blue-500/20 ">
                    my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}