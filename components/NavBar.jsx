import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href="/"
                        className="font-bold font-orbitron text-green-800 hover:underline">
                        Home
                    </Link>
                </li>
                <li className="ml-auto">
                    <Link href="/about" className="font-orbitron text-green-800 hover:underline">About</Link>
                </li>
                <li>
                    <Link href="/reviews" className="font-orbitron text-green-800 hover:underline">Projects</Link>
                </li>
            </ul>
        </nav>
    )
}