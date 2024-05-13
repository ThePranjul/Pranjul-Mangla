import {Button} from "@/components/ui/button"
import "@/lib/transition.css"
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4 justify-center absolute inset-4">
                <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 z-0">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Hey I'm <span className="z-0 name">ATISHAY JAIN</span>
                </h1>
                <p className="text-lg text-gray-600 text-center">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I'm a backend developer, cloud engineer and a tech enthusiast.
                </p>
                <div className="flex gap-4">
                    <Link href="/project">
                        <Button variant="link" className="text-gray-500 text-lg">see my projects</Button>
                    </Link>
                    <Link href="/contact">
                    <Button variant="link" className="text-gray-500 text-lg">contact me</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
