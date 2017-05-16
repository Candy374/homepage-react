/**
 * Created by huangling on 16/5/2017.
 */
export default ({ body, title }) => (`
  <!DOCTYLE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
    <script src="/assets/bundle.js"></script>
  </html>
`);