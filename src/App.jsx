import { Provider } from "react-redux"
import Body from "./components/Body"
import appStore from "./Utils/appStore"

const App = () => {
  return (
    <Provider store={appStore} className="">
      <Body />
    </Provider>
  )
}

export default App
