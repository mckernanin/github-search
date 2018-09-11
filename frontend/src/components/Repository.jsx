import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  width: 50%;
  padding: 1em;
  box-sizing: border-box;
  h3 {
  }
  a {
    color: black;
    font-weight: normal;
    display: flex;
    align-items: center;
  }

  img {
    max-width: 25px;
    display: inline-flex;
    margin-right: 0.5em;
  }
`;

const Repository = ({
  repo: { name, description, stars, language, owner, url }
}) => (
  <Styles>
    <h3>
      <a href={url} target="_blank" rel="noopener">
        <img src={owner.avatar_url} />
        <strong>{owner.login}</strong>/{name}
      </a>
    </h3>
    <h4>{owner.name}</h4>
    <p>{description}</p>
    <p>Stars: {stars}</p>
    <p>Language: {language}</p>
  </Styles>
);

export default Repository;
