import Content from './components/Content'
import ThemeContextProvider from './context/ThemeContext'
import ButtonTheme from './components/ButtonTheme'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ButtonTheme/>
        <Content/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
