//import './App.css'
import MyJumbotron from './component/Jumbotron'
import MyNavBar from './component/MyNavBar'
import MyFooter from './MyFooter'

function App() {
  return (
    <div>
      <MyNavBar title="Easy-Book-Store" />
      <MyJumbotron />
      <MyFooter />
    </div>
  )
}

export default App