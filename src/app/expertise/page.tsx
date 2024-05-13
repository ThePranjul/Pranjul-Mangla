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
        {id: "3", name: "Python", caption: "FastAPI | SQLAlchemy"},
        {id: "2", name: "Database", caption: "PostgreSQL | CockroachDB | Realtime Database"},
        {id: "1", name: "Google Cloud", caption: "PostgreSQL | Cloud Run | Artifact Registry | Cloud Build"},
        {id: "7", name: "Server-Programming", caption: "WebSockets | RESTful APIs"},
        {id: "6", name: "Azure", caption: "PostgreSQL | Container Apps | Registry"},
        {id: "4", name: "Front-End", caption: "NextJS | Flutter | VueJS"},
        {id: "5", name: "Tools", caption: "Docker | Git | Shell"},
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
                        <h1 className="text-4xl text-center p-2 text-black font-extrabold">Expertise</h1>
                        <Separator className="bg-gray-500"/>
                        <ol className="overflow-y-scroll h-full overflow-x-hidden">
                        {items.map((item, index) => (
                                    <span key={index}>
                            <li className="text-3xl pt-2 font-semibold text-gray-700 hover:translate-x-1 transition-transform">{item.name}</li>
                                        <span className="pb-2 pl-3 text-gray-400">{item.caption}</span>
                            <Separator className="bg-gray-300"/>
                        </span>
                                ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
