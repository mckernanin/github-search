import React, { Fragment } from "react";
import styled from "styled-components";

const Styles = styled.div`
  margin: 0 auto;
  margin: 5em;
  font-size: 18px;
  display: flex;
  align-items: flex-end;
  flex-flow: row wrap;

  input,
  select,
  label,
  button {
    font-size: 1em;
    margin-right: 1em;
  }

  label {
    display: inline-flex;
    flex-flow: column;
    text-align: left;

    strong {
      margin-bottom: 0.25em;
    }
  }
`;

const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Updated", value: "updated" },
  { label: "Stars", value: "stars" },
  { label: "Forks", value: "forks" }
];

const orderOptions = [
  { label: "Descending", value: "DESC" },
  { label: "Ascending", value: "ASC" }
];

class Search extends React.Component {
  state = {
    query: "",
    sort: sortOptions[0].value,
    order: orderOptions[0].value
  };

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSearch = async () => {
    const { query, sort, order } = this.state;
    const { saveResults } = this.props;
    fetch(`/v1/github/search?query=${query}&sort=${sort}&order=${order}`)
      .then(response => response.json())
      .then(response => console.log(response) || saveResults(response.repos));
  };

  render() {
    return (
      <Styles>
        <label htmlFor="query">
          <strong>Search Terms</strong>
          <input type="text" name="query" onChange={this.onChange} />
        </label>
        <label>
          <strong>Sort By</strong>
          <select name="sort" onChange={this.onChange}>
            {sortOptions.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <button onClick={this.handleSearch}>Search!</button>
      </Styles>
    );
  }
}

export default Search;
