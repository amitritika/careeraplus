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
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163398934-1"></script>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          <script data-ad-client="ca-pub-1792623713572003" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
          <link href="vendor/icofont/icofont.min.css" rel="stylesheet" />
          <link href="vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link href="vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link href="vendor/venobox/venobox.css" rel="stylesheet" />
          <link href="vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
          <link href="../../../stylesheets/stylesheettrial.css" rel="stylesheet" />
          
          <script src="vendor/jquery/jquery.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="vendor/jquery.easing/jquery.easing.min.js"></script>
          <script src="vendor/php-email-form/validate.js"></script>
          <script src="vendor/waypoints/jquery.waypoints.min.js"></script>
          <script src="vendor/counterup/counterup.min.js"></script>
          <script src="vendor/venobox/venobox.min.js"></script>
          <script src="vendor/owl.carousel/owl.carousel.min.js"></script>
          <script src="vendor/isotope-layout/isotope.pkgd.min.js"></script>
          <script src="vendor/aos/aos.js"></script>

 
          <script src="js/main.js"></script>
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
