import { FaLayerGroup, FaReact, FaServer } from "react-icons/fa";



export default function Services() {
    const services = [
        {
            name: 'Full Stack Development',
            icon: <FaLayerGroup/>,
            description: 'Building end-to-end web applications using MERN stack with optimized performance and scalable architecture.',
            link: '#',
        },
        {
            name: 'Frontend Development',
            icon: <FaReact/>,
            description: 'Creating modern, responsive interfaces with React and TailwindCSS focused on clean UI and smooth user experience.',
            link: '#',
        },
        {
            name: 'Backend Development',
            icon: <FaServer/>,
            description: 'Developing REST APIs and backend systems with Node.js, Express, and MongoDB/SQL for secure data handling.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-10">
            <h4 className="text-center mb-2 text-lg dark:text-[#1EFF00] text-blue-500">What i offer</h4>
            <h2 className="text-center text-5xl">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12">I am a Full-Stack Web Developer specializing in MERN, Java, and SQL — passionate about building scalable, user-focused applications with clean design and powerful backend systems.</p>

            <div className="grid grid-cols-auto my-10 gap-1">
                {services.map((service) => (
                    <div key={service.name} className="border border-blue-500/60 hover:bg-blue-500/10 md:nth-[3]:border-r-0 md:nth-[6]:border-r-0 dark:border-green-500/20 dark:hover:bg-green-500/10 cursor-pointer flex flex-col items-start justify-center p-10 hover:translate-y-[-5px] transition">
                        <div className="rounded-sm h-9 w-9 flex items-center justify-center text-xl bg-blue-500/20 dark:text-black dark:bg-[#1EFF00]  dark:hover:bg-[#17c600]  cursor-pointer transition">
                            {service.icon}
                        </div>
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        {/* <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a> */}
                    </div>
                ))}
            </div>
        </div>
    )
}