"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var ProjectCard = function (_React$Component) {
  _inherits(ProjectCard, _React$Component);

  function ProjectCard(props) {
    _classCallCheck(this, ProjectCard);

    return _possibleConstructorReturn(this, (ProjectCard.__proto__ || Object.getPrototypeOf(ProjectCard)).call(this, props));
  }

  _createClass(ProjectCard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "card" },
        React.createElement("img", { src: this.props.image, width: "100%", height: "270" }),
        React.createElement(
          "div",
          { className: "card-img-overlay" },
          React.createElement(
            "h5",
            { className: "card-title" },
            this.props.title
          ),
          React.createElement(
            "p",
            { className: "card-text" },
            this.props.technologies
          ),
          React.createElement(
            "p",
            { className: "card-text" },
            this.props.description
          )
        )
      );
    }
  }]);

  return ProjectCard;
}(React.Component);

document.querySelectorAll("#project-card").forEach(function (domContainer) {
  // Read the comment ID from a data-* attribute.
  var image = domContainer.dataset.image;
  var title = domContainer.dataset.title;
  var technologies = domContainer.dataset.technologies;
  var description = domContainer.dataset.description;
  var root = ReactDOM.createRoot(domContainer);
  root.render(e(ProjectCard, {
    image: image,
    title: title,
    technologies: technologies,
    description: description
  }));
});

// const domContainer = document.querySelector("#like_button_container");
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));