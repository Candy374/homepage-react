/**
 * Created by huangling on 16/5/2017.
 */
export default ({body, title}) => (`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
  </html>
`);