'use server'

import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

export default async function projects()  {
    interface shortProject {
        id: string;
        name: string;
        caption: string;
    }
    let items : shortProject[] = [
        {id: "8", name: "Portfolio", caption: "May 2024 | FrontEnd | NextJS + TailwindCSS + Vercel"},
        {id: "7", name: "Financial-Nexus", caption: "Apr 2024 | Backend | Python + Postgres + Docker"},
        {id: "6", name: "Catalogify", caption: "Mar 2024 | Backend | Python + Postgres + ChatGPT API + Computer Vision"},
        {id: "5", name: "Sync-Nexus", caption: "Feb 2024 | Backend | Python + Postgres + Docker"},
        {id: "4", name: "Community-Forum", caption: "Oct 2023 | Full-Stack | Python + Postgres + VueJS + Docker"},
        {id: "3", name: "NGO-Donor Connect", caption: "Jan 2021 | App Dev | Flutter + Firebase Auth + Realtime DB"},
        {id: "2", name: "Scientific Calculator", caption: "Dec 2019 | Backend | Java + Swing Lib"},
        {id: "1", name: "Automated Library Management", caption: "June 2018 | Backend | C++ + Binary Files"},
    ]
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col absolute inset-4">
                <div className="container flex flex-row grid_container">
                    <div className="left_side">
                        <AspectRatio ratio={1} className="p-4">
                            <Image src="/Apple-Logo.png" alt="hello" fill/>
                        </AspectRatio>
                    </div>
                    <div className="flex flex-col flex-grow">
                        <h1 className="text-4xl text-center p-2 text-black font-extrabold">Projects</h1>
                        <Separator className="bg-gray-500"/>
                        <ol className="overflow-y-scroll h-full overflow-x-hidden">
                        {items.map((item, index) => (
                                    <span key={index}>
                                        <Link href={`/project/${item.id}`}>
                            <li className="text-3xl pt-2 font-semibold text-gray-700 hover:translate-x-1 transition-transform">{item.name}</li>
                                        <span className="pb-2 pl-3 text-gray-400">{item.caption}</span>
                            <Separator className="bg-gray-300"/>
                                        </Link>
                        </span>
                                ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
