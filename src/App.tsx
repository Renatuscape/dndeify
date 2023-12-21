import './App.css'
import Card from './components/Card'
import SpellFinder from './components/apiControllers/SpellFinder'

function App() {

  return (
    <>
    <div className="components">
      <Card title="Spellfinder" headerBox={true}>
        <SpellFinder/>
      </Card>
        <Card>
          <p>Card with no frills.</p>
        </Card>
        <Card title="Card with Title and Content" contentBox={true}>
          <p>A lot of card content goes in this one.</p>
        </Card>
        <Card title="Card with Titlebox" contentBox={true} headerBox={true}>
          <p>A lot of card content goes in this one.</p>
        </Card>      
    </div>

    </>
  )
}

export default App
