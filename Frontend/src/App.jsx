import {RouterProvider} from "react-router"
import {router} from './app.routes' 
import { AuthProivder } from "./features/auth/auth.context"
import './features/shared/global.scss'
function App() {
  
  return (
    <AuthProivder>
      <RouterProvider router={router}/>
    </AuthProivder>
  )
}

export default App
