import { Nav } from "../../components/nav"
import { HomePage } from "./home.page"

const HomeRoute = () => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <Nav />

      <div>Server-Side rendered Home Route</div>

      <div>
        <HomePage />
      </div>
    </div>
  )
}

export default HomeRoute
