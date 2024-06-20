import "./css/globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "*NixConnect",
  description: "Modern social network with a retro look and inclusive mindset",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-1">
      <body className="leading-6 font-2 bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
