import "../styles/global.css";
import "../styles/reset.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Metadata } from "next";
import { DARK_COLORS, LIGHT_COLORS } from "theme";

export const metadata: Metadata = {
  title: "Shah Hussain | Software Development Engineer",
  description:
  "Shah Hussain is a Full Stack Engineer ranked 84th Top Committer in Pakistan, with a Bachelor's degree in Computer System Engineering from the University of Engineering and Technology Peshawar.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shhahhussain.github.io/",
    title: "Shah Hussain | Software Development Engineer",
    images: ["https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/shhahhussain.github.io/Shah%20Hussain%20%7C%20Full%20Stack%20Engineer/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F4c58f7e1-8524-4c7b-a5c3-305cdb16dc61.jpg%3Ftoken%3D2dK5g8ViJZYACO--guzL6sOi3xKQpg77X0m6yX6NzSo%26height%3D513%26width%3D1200%26expires%3D33244548259/og.png"],
  },
};

function RootLayout({children}: { children: React.ReactNode }) {
    const theme = "light";
    const themeColors = theme === "light" ? LIGHT_COLORS: DARK_COLORS;

  return (
      <html
          lang="en"
          suppressHydrationWarning
          className="bg-neutral-900"
          data-color-theme={theme}
          //@ts-ignore
          style={themeColors}
      >
      <body suppressHydrationWarning={true}>
      <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
      </html>
  );
}

export default RootLayout;
