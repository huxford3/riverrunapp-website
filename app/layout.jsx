export const metadata = {
  title: "RiverRun",
  description: "Paddle shuttle made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
