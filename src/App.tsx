import React from 'react';
import './App.css';
import Title from './title';

function App() {
  //console.log(Title)
  const { examples, questions } = Title

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="content">
        <div className="title">examples</div>
        <ul className="list">
          {
            examples.map((item, index) => {
              if(item.link){
                return (
                  <li key={item.id}>
                    {(<a href={item.link} rel="noopener noreferrer" target={item.target || ''}>{index+1}、{item.name}</a>)}
                  </li>
                )
              } else {
                return (
                  <li key={item.id}>
                    {(<a href={item.link} rel="noopener noreferrer" target={item.target || ''}>{index+1}、{item.name}</a>)}
                  </li>
                )
              }
            })
          }
        </ul>

        <div className="title">questions</div>
        <ul className="list">
          {questions.map((item, index) => 
            <li key={item.id}>
              {(<a href={item.link} rel="noopener noreferrer" target={item.target}>{index+1}、{item.name}</a>)}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
