import {RouterProvider} from "react-router"
import {router} from './app.routes' 
import { AuthProivder } from "./features/auth/auth.context"
import './features/shared/global.scss'
import { PostContextProvider } from "./features/posts/post.context"
function App() {
  
  return (
    <AuthProivder>
      <PostContextProvider>
          <RouterProvider router={router}/>
      </PostContextProvider>
    </AuthProivder>
  )
}

export default App
