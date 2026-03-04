import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

import { Html, Head, Main, NextScript } from "next/document";


export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/base.css" />

          <meta
            name="description"
            content="Aqui podras ver informacion sobre mi, mis proyectos, tecnologías aprendidas y contactarme si gustas"
          />
          <meta name="theme-color" content="#010606" />
        </Head>
        <body>
          <a href="#main" className="skip-link">
            Saltar al contenido principal
          </a>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
