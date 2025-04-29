import StoreProvider from "@/StoreProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Canva",
    description: "The Next Big Thing",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-blue-50 md:bg-red-100 lg:bg-red-200 xl:bg-red-400 2xl:bg-blue-200' >
                <Navbar/>
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}
