import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinemind - AI Powered movie recommendations",
  description:
    "CineMind: Elevate Your Movie Experience with AI-Powered Recommendations Welcome to CineMind, your ultimate destination for cinematic exploration and entertainment! CineMind is not just another streaming platform; it's your personal movie connoisseur, powered by cutting-edge artificial intelligence. Discover the magic of tailored movie recommendations like never before. CineMind's intelligent algorithms analyze your viewing history, preferences, and even your mood to curate a handpicked selection of films that match your unique tastes. Say goodbye to endless scrolling and hello to movie nights that are guaranteed to captivate and delight. Key Features: 🎬 Personalized Recommendations: CineMind's AI understands your cinematic preferences, suggesting films that are tailored just for you. 🌟 Mood-Based Selection: Feeling romantic, adventurous, or nostalgic? CineMind caters to your mood, delivering the perfect movie for every moment. 📽️ Expansive Library: Dive into a vast collection of movies spanning all genres and eras, from classic masterpieces to the latest blockbusters. 🍿 Seamless Streaming: Enjoy buffer-free, high-definition streaming for a truly immersive cinematic experience. 📺 Cross-Device Compatibility: Switch seamlessly between devices, ensuring you never miss a moment of your favorite films. 🔐 Secure and Private: Your viewing history and personal data are kept safe and confidential, so you can explore with peace of mind. Join the CineMind community and embark on a cinematic journey like no other. Whether you're a film aficionado or a casual viewer, CineMind is here to make your movie nights extraordinary. Start discovering, start watching, and let CineMind redefine the way you experience cinema. Experience the future of movie streaming with CineMind - where your movie night is as unique as you are",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/jpg" href="/cinemind-mono.svg" />
      </head>
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
