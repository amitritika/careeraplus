const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const getConfig = require('next/config').default;
const { publicRuntimeConfig } = getConfig();
const { list } = require('../../actions/blog');

export default async (req, res) => {
  try {
    // An array with your links
    const links = [];
    function processPost(post) {
      return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
          
          links.push({
            url: `/blogs/${post.slug}`,
            changefreq: "daily",
            priority: 0.9,
          });
          resolve();
        }, 1000); // Adjust the timeout as needed
      });
    }
    
    list()
      .then((data) => {
        const postPromises = data.map(processPost);
        return Promise.all(postPromises);
      })
      .then(() => {
        // Other lines of code to execute after the asynchronous operations finish
        
        
        const pages1 = ["/examplan","/visualresume","/blogs", "/aboutus","/contactus"];
        const pagesExamplan = ["gate","ese","psc"];
        const pagesExamplanGate = ["mechanical", "civil", "electronics","computerscience","electrical","chemical","instrumentation"];
        const pagesExamplanEse = ["mechanical", "civil", "electronics","electrical"];
        const pagesExamplanPsc = ["mppscenglish", "mppschindi"];
        pages1.map((url) => {
          links.push({
            url,
            changefreq: "daily",
            priority: 0.9,
          });
        });

        pagesExamplan.map((u) => {
          links.push({
            url: `/examplan/${u}`,
            changefreq: "daily",
            priority: 0.9,
          });
        });

        pagesExamplanGate.map((u) => {
          links.push({
            url: `/examplan/gate/${u}`,
            changefreq: "daily",
            priority: 0.9,
          });
        });

        pagesExamplanEse.map((u) => {
          links.push({
            url: `/examplan/ese/${u}`,
            changefreq: "daily",
            priority: 0.9,
          });
        });

        pagesExamplanPsc.map((u) => {
          links.push({
            url: `/examplan/psc/${u}`,
            changefreq: "daily",
            priority: 0.9,
          });
        });

        const stream = new SitemapStream({
          hostname: `https://${req.headers.host}`,
        });
    
        res.writeHead(200, {
          "Content-Type": "application/xml",
        });
    
        const xmlStringPromise = Promise.resolve(
          streamToPromise(Readable.from(links).pipe(stream))
        ).then((data) => data.toString());
        
        xmlStringPromise.then((xmlString) => {
          res.end(xmlString);
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // Add other pages
    

    // Create a stream to write to
    
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
