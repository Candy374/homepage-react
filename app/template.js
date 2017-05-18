/**
 * Created by huangling on 16/5/2017.
 */
export default ({body, title}) => (`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <link rel="stylesheet" href="./index.css">
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
    <script src="/assets/bundle.js"></script>
  </html>
`);