'use server'
import Link from "next/link";
export default async function Footer() {
    return(
        <footer className="flex flex-row justify-evenly w-full items-center bg-gray-900 text-white">
            <div className="flex flex-row menu_container justify-between text-xs">
                <span>© Pranjul Mangla</span>
                <Link href="/projects">
                    Special Thanks: Atishay(Programmer)
                </Link>
            </div>
        </footer>
    )
}