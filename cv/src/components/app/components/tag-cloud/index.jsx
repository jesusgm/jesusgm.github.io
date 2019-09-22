import React, { Component } from "react";
import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";
import "./styles.css";

class MyTagCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 5000);
  }
  render() {
    const { tags } = this.props;

    return (
      <div className="tag-cloud-container">
        <TagCloud
          className="tag-cloud"
          random={Math.random}
          style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            color: () => randomColor(),
            padding: 10,
            width: "100%",
            height: "500px"
          }}
        >
          {tags.map(tag => (
            <div
              key={tag.id}
              style={{
                fontSize: tag.percentage / 4,
                fontStyle: Math.random() > 0.8 ? "italic" : "normal",
                fontWeight:
                  tag.percentage > 90 && Math.random() < 0.5 ? "bold" : "normal"
              }}
              rotate={Math.random() > 0.99 ? -90 : 0}
            >
              {tag.name}
            </div>
          ))}
        </TagCloud>
      </div>
    );
  }
}

export default MyTagCloud;
