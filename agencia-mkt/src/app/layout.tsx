import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agencia de Marketing",
  description: "Generated by create next app",
};

const bootstrapScripts = [
  {
    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    integrity:
      "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
    crossOrigin: "anonymous",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children} {/* Agrega los scripts de Bootstrap aquí */}
        {bootstrapScripts.map((script, index) => (
          <script
            key={index}
            src={script.src}
            integrity={script.integrity}
            crossOrigin={script.crossOrigin}
            dangerouslySetInnerHTML={{
              __html: `/**/`,
            }}
          />
        ))}
      </body>
    </html>
  );
}
