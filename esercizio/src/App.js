import React from 'react'
import TodoList from './TodoList'



export default class App extends React.Component {
  render() {
    return (
      <TodoList item={
        (list, handleRemove) =>
          <ul>
            {list.map((items, index) =>
              <>
                <li key={index}>{items}</li>
                <button onClick={handleRemove}>Remove</button>
              </>
            )}
          </ul>
      }
      />
    )
  }
}