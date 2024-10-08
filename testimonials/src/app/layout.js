import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = localFont({
    src: "./_fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./_fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Testimonial Clone",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-black md:bg-blue-600 lg:bg-red-600 xl:bg-yellow-600 max-w-6xl mx-auto`}
            >
                <StoreProvider>
                    <Navbar />
                    <div className="border-t border-gray-800">
                        {children}
                        <Footer />
                    </div>
                </StoreProvider>
            </body>
        </html>
    );
}
