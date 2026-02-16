import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";



export default function Work() {

    const work = [
        {
            name: 'DocDirect',
            live: 'https://thumb-bot-kohl.vercel.app/',
            github: 'https://github.com/tanmoy-paul01/DocDirect',
            description: 'DocDirect is a doctor appointment web app built with the MERN stack, styled using Tailwind CSS. It features secure JWT authentication, encrypted passwords with bcrypt, image uploads via Cloudinary, and email services using Nodemailer. The platform streamlines doctor-patient interactions through easy appointment booking and reliable communication.',
        },
        {
            name: 'ThumbBot',
            live: 'https://thumb-bot-kohl.vercel.app/',
            github: 'https://github.com/tanmoy-paul01/ThumbBot',
            description: 'ThumbBot is an AI-powered thumbnail generator built with the MERN stack, TypeScript, and Tailwind CSS. It integrates Google Gemini for AI image generation and Cloudinary for image storage, featuring secure session-based authentication with bcrypt. The app delivers a fast, responsive experience for creating professional thumbnails effortlessly.',
        },
        {
            name: 'QR Code Generator',
            live: 'https://generate-qr-code-2e8m.onrender.com/',
            github: 'https://github.com/tanmoy-paul01/Generate_QR_Code',
            description: 'This QR Code Generator is a full-stack web application built with HTML, CSS, JavaScript, Node.js, and Express.js. It allows users to input text or URLs and instantly generate downloadable QR codes. The app features a clean interface and fast performance, making it ideal for quick and secure data sharing.',
        },
        {
            name: 'SkillMela',
            live: 'https://skillmela.onrender.com/',
            github: 'https://github.com/tanmoy-paul01/SkillMela',
            description: 'A full-stack freelancing platform connecting skilled professionals with clients. Features include user profiles, job listings, and secure payment processing, with having learning opportunities for freelancers to enhance their skills, mentorship programs, and community forums for knowledge sharing.',
        },
        {
            name: 'Tic Tac Toe',
            live: 'https://tanmoy-paul01.github.io/Tic-Tac-Toe-Web-app/',
            github: 'https://github.com/tanmoy-paul01/Tic-Tac-Toe-Web-app',
            description: 'Tic-Tac-Two is a classic two-player web game built with HTML, CSS, Javascript. Players take turns marking X or O on a 3x3 grid, aiming to align three symbols in a row. The game features a clean interface, responsive design, and smooth interactivity for an engaging and nostalgic gaming experience.',
        },
        {
            name: 'Calculator',
            live: 'https://tanmoy-paul01.github.io/Calculator/',
            github: 'https://github.com/tanmoy-paul01/Calculator',
            description: 'This Calculator project is a responsive web application built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division. With a clean user interface and smooth button interactions, it’s designed for quick calculations on both desktop and mobile devices.',
        },
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-10">

            <h4 className="text-center mb-2 text-lg  dark:text-[#1EFF00] text-blue-500">My portfolio</h4>
            <h2 className="text-center text-5xl">My latest work</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
                Welcome to my web development portfolio! Explore projects showcasing my full-stack expertise.
            </p>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-1">

                {work.map((item, index) => (
                <a key={index} href={item.live} target="_blank" className="border border-blue-500/60 hover:bg-blue-500/10 dark:border-green-500/20 dark:hover:bg-green-500/10 transition flex flex-col justify-between p-5 " >
                    <div>
                        <h3 className="text-lg font-medium mt-2">{item.name}</h3>
                        <p className="mt-3 text-sm text-gray-600 leading-5 dark:text-white/80">{item.description}</p>
                    </div>
                    <div className="flex gap-3 self-end">
                        {/* <a href={item.live} target="_blank" rel="noopener noreferrer" className=" rounded-sm h-9 w-9 flex items-center justify-center text-xl dark:text-black dark:bg-[#1EFF00]  dark:hover:bg-[#15B100]  cursor-pointer transition" >
                                <FiExternalLink />
                        </a> */}
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className=" rounded-sm h-9 w-9 flex items-center justify-center text-xl dark:text-black dark:bg-[#1EFF00]  dark:hover:bg-[#15B100]  cursor-pointer transition bg-blue-500/20 hover:bg-blue-500/40" >
                                <FaGithub />
                        </a>
                    </div>
                </a>
                ))}

            </div>
        </div>
    );
}
