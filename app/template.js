/**
 * Created by huangling on 16/5/2017.
 */
export default ({body, title}) => (`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
         <link rel="stylesheet" href="style/index.css" />
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
    <script src="/assets/bundle.js"></script>
    <div id="layer">
  </html>
`);

//<script src="http://html5media.googlecode.com/svn/trunk/src/html5media.min.js"></script>