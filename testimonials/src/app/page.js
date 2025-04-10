// components/Counter.js
import Link from "next/link";
import Image from "next/image";
import Counter from "./_components/Counter";
import Hero from "./_components/Hero";
import Logo from "./_components/Logo";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3.jsx";
import CodeSnippet from "./_components/CodeSnippet";
import ThemeWrapper from "./_components/ToggleTheme";
import Testimonial from "./_components/Testimonial";
function Home() {
    const imag = "/_assets/images/Pixar.jpeg";
    const code = `
<script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
<iframe id="testimonialto-wall-of-love-for-testimonial-light" src="https://embed-v2.testimonial.to/w/wall-of-love-for-testimonial?theme=light&card=base" frameborder="0" scrolling="no" width="100%"></iframe>
<script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, "#testimonialto-wall-of-love-for-testimonial-light");</script>
  `;
    const language = "javascript";
    return (
        <>
            <div className="max-w-6xl">
                {/* <Counter/> */}
                {/* <Image src={imag} width={500} height={500} alt="sian" /> */}
                <Hero />
                <Section1 />
                <Link
                    href="/"
                    className="flex justify-center mb-[3rem] md:mb-[5rem]"
                >
                    <Logo />
                </Link>
                <CodeSnippet code={code} language={language} />
                <hr className="border-b border-gray-800" />
                <Section2 />
                <Section3 />
                <Testimonial />
            </div>
        </>
    );
}

export default Home;
