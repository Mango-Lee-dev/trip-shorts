import "@repo/ui/globals.css";

export const metadata = {
  title: "Trip Shorts",
  description: "숏폼으로 여행을 완성하세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
