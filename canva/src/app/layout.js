import StoreProvider from "@/StoreProvider";
import "./globals.css";

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
            <body>
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}
