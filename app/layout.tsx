import type { Metadata } from "next";
import StyledComponentsRegistry from '@/lib/registry';
import Navbar from '@/app/components/Navbar';
import './globals.css'; // Keep globals for base styles

export const metadata: Metadata = {
  title: "CS 392S Project",
  description: "Team project for CS 392S",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
