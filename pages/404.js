import Link from "next/link"
import Layaut from "../components/Layaut"

const custom404 = () => (
    <Layaut>
    <div className="text-center">
        <h1>404</h1>
        <p>Page not found</p>
        <Link href="/">
            <a>Go to home</a>
        </Link>
    </div>
    </Layaut>
)
export default custom404