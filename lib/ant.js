"use strict";

/* To complie this JSX file:
	$ npm install -g babel-cli
	
*/
var TweetBox = React.createClass({
  displayName: "TweetBox",

  render: function render() {
    return React.createElement(
      "div",
      { className: "well clearfix" },
      React.createElement("textarea", { className: "form-control" }),
      React.createElement("br", null),
      React.createElement(
        "button",
        { className: "btn btn-primary pull-right" },
        "Tweet"
      )
    );
  }
});

ReactDOM.render(React.createElement(TweetBox, null), document.getElementById("container"));