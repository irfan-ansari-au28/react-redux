import "./App.css"
import { Provider } from "react-redux"
import CakeContainer from "./components/CakeContainer"
import store from "./redux/store"
import HooksCakeContainer from "./components/HooksCakeContainer"

function App() {
  return (
    <Provider store={store}>
      <CakeContainer></CakeContainer>
      <HooksCakeContainer></HooksCakeContainer>
    </Provider>
  )
}

export default App
