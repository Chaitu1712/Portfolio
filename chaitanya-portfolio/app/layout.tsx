import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Chaitanya Pandey | AI & Backend Engineer",
  description: "Portfolio of Chaitanya Pandey - AI Systems, Backend Architecture, and Developer Tooling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}