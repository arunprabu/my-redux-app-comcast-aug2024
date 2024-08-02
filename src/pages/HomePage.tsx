import { Counter } from '../features/counter/Counter'
import { Quotes } from '../features/quotes/Quotes'

const HomePage = () => {
  return (
    <div>
      <header className="App-header">
        <Counter />
        <br/>
        <Quotes />
      </header>
    </div>
  )
}

export default HomePage