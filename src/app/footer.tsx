'use server'
import Link from "next/link";
export default async function Footer() {
    return(
        <footer className="flex flex-row justify-evenly w-full items-center">
            <div className="flex flex-row menu_container justify-between text-xs">
                <span>© Atishay Jain</span>
                <Link href="/projects">
                    Special Thanks: Pranjul(Graphics)
                </Link>
            </div>
        </footer>
    )
}