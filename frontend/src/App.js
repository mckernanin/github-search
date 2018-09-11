import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Repository from "./components/Repository";

const Repos = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

class App extends Component {
  state = {
    results: []
  };

  saveResults = results => console.log(results) || this.setState({ results });

  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Search</h1>
        </header>
        <Search saveResults={this.saveResults} />
        <Repos>
          {results.map(repo => (
            <Repository key={repo.url} repo={repo} />
          ))}
        </Repos>
      </div>
    );
  }
}

export default App;
