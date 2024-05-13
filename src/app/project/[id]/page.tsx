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
        tech?: string
        links?: linkData[]
        type?: string[]
    }

    interface linkData {
        name: string,
        link: string
    }

    interface contributorData {
        name: string,
        role: string
        link: string
    }

    const items: longProjects[] = [
        {
            id: "1",
            name: "Automated Library Management",
            description: "Developed a library management tool that facilitates book issuance, returns, and dues payment for students. It includes features for self-checking student and book information. Admin capabilities include adding/deleting students and books, and accessing their information.",
            time: "June 2018",
            tech: "C++ | Binary Files",
            links: [{name: "Github Link", link: "https://github.com/atishayj2202/Library-Management"}]
        },
        {
            id: "2",
            name: "Scientific Calculator",
            description: "This app aims to bridge the gap between the have and have nots. It helps the user discover NGOs which are seeking donations and easily compare them to decide the right organisation. The app takes a step further and also allows the user to directly make donations with click of a few buttons.",
            time: "Jan 2021",
            tech: "Flutter | Realtime Database | Firebase Auth",
            links: [{name: "Github Link", link: "https://github.com/atishayj2202/Calculator_Java"}]
        },
        {
            id: "3",
            name: "NGO-Donor Connect",
            description: "This app aims to bridge the gap between the have and have nots. It helps the user discover NGOs which are seeking donations and easily compare them to decide the right organisation. The app takes a step further and also allows the user to directly make donations with click of a few buttons.",
            time: "Jan 2021",
            tech: "Flutter | Realtime Database | Firebase Auth",
            links: [{name: "Github Link", link: "https://github.com/atishayj2202/NGO-Donor-Connect"}]
        },
        {
            id: "4",
            name: "Community-Forum",
            type: ["Full-Stack"],
            description: "Introducing a community forum project where registered users share posts for open engagement. Encouraging dialogue and collaboration, users can like, dislike, or comment, fostering a dynamic online community experience",
            time: "Oct 2023",
            tech: "Python | Postgres | Docker | Firebase Auth | Azure | VueJS",
            links: [{
                name: "Github Back-End",
                link: "https://github.com/atishayj2202/Community-Forum-Backend"
            }, {
                name: "Github Front-End",
                link: "https://github.com/atishayj2202/Community-Forum-Frontend"
            }, {name: "Visit Website", link: "https://thankful-mushroom-0eb6b5d00.4.azurestaticapps.net"}]
        },
        {
            id: "5",
            name: "Sync-Nexus",
            type: ["Back-End"],
            description: "SyncNexus is a platform that aims to address the inefficiencies and lack of transparency in connecting job seekers with employers. The traditional methods of job searching and task assignment often result in delays, miscommunication, and inefficiencies for both parties. SyncNexus helps by providing a centralized platform where employers can easily post job opportunities and tasks, and job seekers can efficiently search for and apply to relevant positions that are beneficial for both the employee and employer. Additionally, SyncNexus assists employers in keeping track of the location paths of their employees, thereby enhancing workforce management capabilities. By streamlining the job search and task assignment processes, SyncNexus enhances productivity, reduces time-to-hire, and fosters better communication and collaboration between employers and workers.",
            time: "Feb 2024",
            tech: "Python | Postgres | Docker | Firebase Auth | Google Cloud",
            links: [{
                name: "Github Back-End",
                link: "https://github.com/atishayj2202/SyncNexus-Backend"
            }, {
                name: "Github Front-End",
                link: "https://github.com/Ahmedazim7804/SyncNexus-Frontend"
            }],
            contributors: [
                {name: "Ajeem Ahmad", role: "App Dev", link: "https://www.linkedin.com/in/ajeem-ahmad-b445881aa/"},
                {name: "Siddhant Gudwani", role: "Video Developer", link: "https://www.linkedin.com/in/siddhant-g-45330a218/"},
                {name: "Tanmay Gupta", role: "Tester", link: "https://www.linkedin.com/in/tanmay-gupta-858018287/"}
            ]
        },
        {
            id: "6",
            name: "Catalogify",
            type: ["Prompt Engineering | BackEnd"],
            description: "We implemented AI tools for automated quality assessment and catalog organization, aiming to provide a centralized, safe space for buyers and streamline the listing process for sellers.",
            time: "Mar 2024",
            tech: "Python | Postgres | Docker | ChatGPT API | Computer Vision | Azure | Firebase Auth",
            links: [{
                name: "Github Back-End",
                link: "https://github.com/atishayj2202/Catalogify-Backend"
            }, {
                name: "Github Front-End",
                link: "https://github.com/Ahmedazim7804/Catalogify-Frontend"
            }],
            contributors: [
                {name: "Ajeem Ahmad", role: "App Dev", link: "https://www.linkedin.com/in/ajeem-ahmad-b445881aa/"},
                {name: "Khushal Bhasin", role: "App Dev", link: "https://www.linkedin.com/in/khushal-bhasin-78504a284/"}
            ]
        },
        {
            id: "7",
            name: "Financial-Nexus",
            type: ["BackEnd"],
            description: "Our Al-powered financial management solution securely stores your financial information for efficient management.\n" +
                "With a built-in Al chatbot, it provides investment suggestions and financial guidance, empowering informed decision-making. It serves as your personal finance manager, addressing doubts regarding financial decisions anytime, as it operates autonomously, ensuring continuous support.",
            time: "Apr 2024",
            tech: "Python | Postgres | Docker | Firebase Auth | Azure",
            links: [{
                name: "Github Back-End",
                link: "https://github.com/atishayj2202/Financial-Nexus-Backend"
            }, {
                name: "Github Front-End",
                link: "https://github.com/coderkhushal/financial-nexus-Frontend"
            },{
                name: "Visit Website",
                link: "https://financial-nexus.vercel.app/"
            },{
                name: "",
                link: ""
            }],
            contributors: [
                {name: "Rudr Pratap Singh", role: "Prompt Engineering", link: "https://www.linkedin.com/in/rudr-pratap-singh-455116287/"},
                {name: "Khushal Bhasin", role: "Web Front-End", link: "https://www.linkedin.com/in/khushal-bhasin-78504a284/"},
                {name: "Navtesh Maken", role: "Web FrontEnd", link: "https://www.linkedin.com/in/navtesh-maken-95a412286/"}
            ]
        },
        {
            id: "8",
            name: "Portfolio",
            description: "This app aims to bridge the gap between the have and have nots. It helps the user discover NGOs which are seeking donations and easily compare them to decide the right organisation. The app takes a step further and also allows the user to directly make donations with click of a few buttons.",
            time: "May 2024",
            type: ["FrontEnd"],
            tech: "NextJS | TailwindCSS | Vercel",
            links: [{name: "Github Link", link: "https://github.com/atishayj2202/Atishay-Jain-Front_End"}]
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
                                <span className="font-semibold text-black">Tech:</span> {item.tech}
                                {item.links?.map((link, index) => (
                                    <span key={index} className="text-center items-center">
                                        <Link href={link.link}>
                                        <Button variant="link" key={index}>{link.name}</Button>
                                        </Link>
                                    </span>
                                ))
                                }
                                <span
                                    className={`font-semibold text-black ${item.contributors ? "" : "hidden"}`}>Contributors:</span>
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