import React from 'react';

const Body = () => {
  const buildText = [
    "<strong>Under Construction</strong>",
    "I'm a web developer (with some design chops) living in the Bay Area.",
    "I'm currently funemployed and looking for what's next.",
    "Contact me if you have something I might find intriguing <em>info(AT)benjaminchirlin.com</em>",
    "Please feel free to check out my digital footprint elsewhere for now:",
    "<a href='http://github.com/benchirlin' title='Github'>Github</a>",
    "<a href='https://twitter.com/benchirlin' title='Twitter'>Twitter</a>"
  ];
  return buildText.map((text) => {
    return <p dangerouslySetInnerHTML={{__html: text}}/>;
  });
};

export default Body;
