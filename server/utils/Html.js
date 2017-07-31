import React from 'react';

export default class Html extends React.Component {
  render () {
    return (
      <html>
        <head>
          <title>Sample App</title>
        </head>
        <body>
          <div id='content'/>

          <script src='dist/common.js'/>
          <script src='dist/main.js'/>
        </body>
      </html>
    )
  }
}
