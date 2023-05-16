import "@/style/globals.css";

export const metadata = {
  title: "Neflix clone",
  description: "Created by BrainerVirus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-netflixsans">{children}</body>
    </html>
  );
}
