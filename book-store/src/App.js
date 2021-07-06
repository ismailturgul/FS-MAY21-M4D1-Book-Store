//import './App.css'
import MyNavBar from './MyNavBar'

function App() {
  return (
    <>
      {/* this is a react fragment, just a wrapper because every component
    MUST return a single JSX element */}
      <MyNavBar title="Easy-Book-Store" />
    </>
  )
}

export default App