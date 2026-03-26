import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <NextThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
    {children}
  </NextThemeProvider>
);

export default ThemeProvider;
