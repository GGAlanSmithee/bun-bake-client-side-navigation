import { Nav } from "../../components/nav"
import { AboutPage } from "./about.page"

const AboutRoute = () => {
  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <Nav />

      <div>Server-Side rendered About Route</div>

      <div>
        <AboutPage />
      </div>
    </div>
  )
}

export default AboutRoute
