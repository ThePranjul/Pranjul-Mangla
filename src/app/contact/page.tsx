'use server'
import React from 'react';
import Markdown from "react-markdown";
import {Button} from "@/components/ui/button";
import Link from "next/link";

// @ts-ignore
export default async function project_page() {
    interface linkData {
        name: string,
        link: string
    }
    const links: linkData[] = [
        {name: "GitHub", link: "https://github.com/atishayj2202"},
        {name: "LinkedIn", link: "https://www.linkedin.com/in/atishayj2202/"},
        {name: "Instagram", link: "https://www.instagram.com/atishayj2202/"},
        {name: "atishayj2202@gmail.com", link: "mailto:atishayj2202@gmail.com"},
    ]
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col absolute inset-4 items-center">
                <div className="flex flex-row grid_container menu_container">
                    <div className="flex flex-col flex-grow">
                        <h1 className="text-4xl text-center p-2 text-black font-extrabold">Contact Me</h1>
                        <div className="detail_page pt-5">
                            <div className="sec_grid_container">
                                {links.map((link, index) => (
                                    <span key={index} className="text-center items-center">
                                        <Link href={link.link}>
                                        <Button variant="link" key={index}>➚{link.name}</Button>
                                        </Link>
                                    </span>
                                ))
                                }
                            </div>
                            <div className="right_side"><Markdown>FEEDBACK FORM</Markdown></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}