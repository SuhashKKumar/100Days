// components/Counter.js
import Image from "next/image";
import Counter from "./_components/Counter";
import ThemeWrapper from "./_components/ThemeWrapper";
import Hero from "./_components/Hero";
import Section1 from "./_components/Section1";
function Home() {
    const imag = "/_assets/images/Pixar.jpeg";
    return (
        <>
            <div className="max-w-6xl">
                {/* <Counter/> */}
                {/* <Image src={imag} width={500} height={500} alt="sian" /> */}
                <Hero />
                <Section1 />
            </div>
        </>
    );
}

export default Home;
