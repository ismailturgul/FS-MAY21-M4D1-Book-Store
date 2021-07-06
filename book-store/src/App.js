//import './App.css'
import MyJumbotron from './Jumbotron'
import MyNavBar from './MyNavBar'

function App() {
  return (
    <>
      {/* this is a react fragment, just a wrapper because every component
    MUST return a single JSX element */}
      <MyNavBar title="Easy-Book-Store" />
      <MyJumbotron />
    </>
  )
}

export default App