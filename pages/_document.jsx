import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-163398934-1');
        `
      };
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163398934-1"></script>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          
          
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
          
          
          <link href="../../../stylesheets/stylesheettrial.css" rel="stylesheet" />
          <link href="../../../stylesheets/bootstrap.min.css" rel="stylesheet" />
          <link href="../../../stylesheets/stylesheetmain.css" rel="stylesheet" />
          
          <script src="../../../vendor/jquery/jquery.min.js"></script>
          <script src="../../../vendor/aos/aos.js"></script>

           <script src="../../../js/main.js"></script>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
