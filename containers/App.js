import React, {Component} from 'react';

export default class App extends Component {
  render () {
    const buildText = [
      "Excuse my mess but I decided to redo my website while I look for a new work.",
      "In my glee I attempted to update some dependencies on here.",
      "This in turn led to some rash decisions which resulted in breaking many things.",
      "Long story short: under construction!"
    ];
    return buildText.map((text) => {
      return <p>{text}</p>;
    });
  }
}
