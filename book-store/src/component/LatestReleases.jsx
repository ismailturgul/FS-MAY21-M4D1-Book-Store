import fantasy from '../data/fantasy.json'

export default function LatestReleases() {
    console.log(fantasy)
    return <div>{
        fantasy.map(book => {
            return <img className="book-cover" src={book.img} />
        })
        }</div>
}