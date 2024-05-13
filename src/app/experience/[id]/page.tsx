'use server'
import React from 'react';
import Markdown from "react-markdown";
import {Button} from "@/components/ui/button";
import Link from "next/link";

// @ts-ignore
export default async function project_page({params: params}) {
    interface longProjects {
        id: string,
        name: string,
        description: string,
        contributors?: contributorData[]
        time?: string
        type?: string[]
    }

    interface contributorData {
        name: string,
        role: string
        link: string
    }

    const items: longProjects[] = [
        {
            id: "1",
            name: "InHouse.so",
            description: "1. Created new server endpoints and built tests for them using Python's FastAPI framework. Also resolved errors in previous endpoints.\n" +
                "2. Created and updated SQL database table schemas using migration files.\n" +
                "3. Implemented CI/CD pipeline using Cloud Build to run database migrations on CockroachDB database and deploy to Google Cloud Run.\n" +
                "4. Integrated GitHub Actions to run tests on pull requests and ensure code formatting.\n" +
                "5. Migrated the application's authentication system from Firebase Authentication to Google Identity Platform.\n" +
                "6. Added setup to log response time for each server request, improving observability.",
            time: "Dec 2023",
            type: ["Backend Engineering Internship"],
            contributors: [
                {name: "Aarshay Jain", role: "Manager", link: "https://www.linkedin.com/in/aarshayjain/"},
            ]
        },
        {
            id: "2",
            name: "Jupiter.co",
            description: "Ongoing",
            time: "May-July 2023",
            type: ["Data Engineering Internship"],
            contributors: [
                {name: "Sarthak Arora", role: "Manager", link: "https://www.linkedin.com/in/iasarthak/"},
            ]
        },
    ]
    let item: longProjects = items[parseInt(params.id) - 1]
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col absolute inset-4 items-center">
                <div className="flex flex-row grid_container menu_container">
                    <div className="flex flex-col flex-grow">
                        <h1 className="text-4xl text-center p-2 text-black font-extrabold">{item.name}</h1>
                        <div className="detail_page pt-5">
                            <div className="sec_grid_container">
                                {item.type?.map((link, index) => (
                                    <>
                                        <span className="font-semibold text-black">Type:</span> {link}
                                    </>
                                ))
                                }
                                <span className="font-semibold text-black">Month-Year:</span> {item.time}
                                <span
                                    className={`font-semibold text-black ${item.contributors ? "" : "hidden"}`}>Recommendation:</span>
                                <br/>
                                {item.contributors?.map((contributor, index) => (
                                    <>
                                        <span key={index} className="w-full">
                                            <Link href={contributor.link}>
                                                <Button variant="ghost" className="font-medium text-right w-full"
                                                        key={index}>➚{contributor.name}</Button>
                                            </Link>
                                        </span>
                                        <Link href={contributor.link}>
                                        <Button key={index} className="w-full text-gray-500" variant="pseudo">
                                        {contributor.role}
                                        </Button>
                                        </Link>
                                    </>
                                ))
                                }
                            </div>
                            <div className="right_side"><Markdown>{item.description}</Markdown></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}