import "@/styles/index.css" //global styles

export const metadata = {
  title: "Next app template",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
