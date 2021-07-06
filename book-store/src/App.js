//import './App.css'
import MyNavBar from './components/MyNavBar'
function App() {
  return (
    <>
      {/* this is a react fragment, just a wrapper because every component
    MUST return a single JSX element */}
      <MyNavBar title="Strivestaurant" />
    </>
  )
}

export default App