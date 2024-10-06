// components/Counter.js
import Image from "next/image";
import Counter from "./_components/Counter";
import ThemeWrapper from "./_components/ThemeWrapper";

function Home() {
    const imag = '/_assets/images/Pixar.jpeg'
    return (
        <ThemeWrapper>
            <Counter/>
            <Image src={imag} width={500} height={500} alt="sian" />
        </ThemeWrapper>
        )
}

export default Home;
