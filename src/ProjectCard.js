"use strict";

const e = React.createElement;

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.image} width="100%" height="270" />
        <h2 className="card-title m-0 p-3">{this.props.title}</h2>
        <div className="card-img-overlay">
          <h5>
            Technologies:
          </h5>
          <p className="card-text">{this.props.technologies}</p>
          <h5>
            Description:
          </h5>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

document.querySelectorAll("#project-card").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  const image = domContainer.dataset.image;
  const title = domContainer.dataset.title;
  const technologies = domContainer.dataset.technologies;
  const description = domContainer.dataset.description;
  const root = ReactDOM.createRoot(domContainer);
  root.render(
    e(ProjectCard, {
      image: image,
      title: title,
      technologies: technologies,
      description: description,
    })
  );
});

// const domContainer = document.querySelector("#like_button_container");
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));
