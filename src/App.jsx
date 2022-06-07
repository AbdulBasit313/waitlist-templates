import { routes } from 'navigations/Routes'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  )
}

export default App
