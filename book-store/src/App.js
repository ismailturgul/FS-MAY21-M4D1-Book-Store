import './App.css'
import MyNavBar from './component/MyNavBar'
import MyFooter from './component/MyFooter'
import MyJumbotron from './component/Jumbotron'
import LatestReleases from './component/LatestReleases'

function App() {
  return (
    <div>
      <MyNavBar title="Easy-Book-Store" />
      <MyJumbotron />
      <LatestReleases />
      <MyFooter />
    </div>
  )
}

export default App