import Header from '../components/header';
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <h2>⚡App router</h2>
        {children}
        </main>
      </body>
    </html>
  )
}