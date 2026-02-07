import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
        if (!hCaptcha) {
            event.preventDefault();
            setResult("Please fill out captcha field");
            return
        }
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ----- Enter your Web3 Forms Access key below---------

        formData.append("access_key", "e29071e2-81a6-4dc8-a6ed-f04fb5ba7e01");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) {
                scriptSrc += `&hl=${lang}`;
            }
            if (onload) {
                scriptSrc += `&onload=${onload}`;
            }
            if (render) {
                scriptSrc += `&render=${render}`;
            }

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-10 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg dark:text-[#1EFF00] text-blue-500">Connect with me</h4>
            <h2 className="text-center text-5xl">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12">I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <input type="hidden" name="subject" value="Tanmoy Paul - New form Submission" />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-blue-500/60 dark:border-green-500/20 rounded-sm bg-white dark:bg-black" required name="name" />
                    <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-blue-500/60  dark:border-green-500/20 rounded-sm bg-white dark:bg-black" required name="email" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-2 focus:ring-1 outline-none border border-blue-500/60 dark:border-green-500/20 rounded-sm bg-white mb-6 dark:bg-black" required name="message"></textarea>
                <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div>
                <button type='submit' className="border border-blue-600 bg-blue-500/10 hover:bg-blue-500/20 py-2 px-8 w-max flex items-center justify-between gap-2 rounded-sm mx-auto hover:bg-black duration-500 dark:text-black dark:border dark:border-[#1EFF00] dark:hover:border-[#15B100] dark:bg-[#1EFF00] dark:hover:bg-[#15B100] transition">
                Submit now
                    <img src="./assets/arrow-icon.png" alt="" className="w-3" />
                </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}