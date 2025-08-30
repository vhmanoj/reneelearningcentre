import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick weights you’ll use
});

export const metadata = {
  title: "Reene Learning Center",
  description: "Reene Learning Center daycare for children.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
