import React from 'react'

const App = () => {
  const names = ['a', 'b']
  return (
    <div id="main">
               {/* Do not remove the main div */}
    <ol>
    {
      data.map((el,i)=><li key={"relativeListItem"+(i+1)} >{el}</li>}
    }
    </ol>
    </div>
  )
}

export default App
