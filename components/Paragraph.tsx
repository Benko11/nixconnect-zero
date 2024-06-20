export function Paragraph({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="leading-[140%] mb-6">{children}</p>;
}
