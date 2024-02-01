import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  const layout = <DefaultLayout />
  const routes = {
    home: <Home />,
    history: <History />,
  }

  return (
    <Routes>
      <Route path="/" element={layout}>
        <Route path="/" element={routes.home} />
        <Route path="/history" element={routes.history} />
      </Route>
    </Routes>
  )
}
