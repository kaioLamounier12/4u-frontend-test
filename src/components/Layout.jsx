import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}
