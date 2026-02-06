import Card from '../components/Card'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Card title="Welcome">
        <p>Welcome to 4U Frontend Test</p>
      </Card>
      <Card title="Info">
        <p>This is a React + Vite project</p>
      </Card>
    </div>
  )
}
