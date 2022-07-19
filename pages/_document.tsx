import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

import { Html, Head, Main, NextScript } from "next/document";

//  function Document() {
//   return (
//     <Html>
//       <Head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           rel="stylesheet"
//           type="text/css"
//           charSet="UTF-8"
//           href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//         />
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//         />
//         <link rel="stylesheet" href="/base.css" />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
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
            crossOrigin="true"
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
