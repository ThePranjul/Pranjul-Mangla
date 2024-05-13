'use client'

import image_1 from "../../public/color wave grain.svg"
import image_2 from "../../public/color line grain 2.svg"
import image_3 from "../../public/color line grain 1 perp.svg"
import image_4 from "../../public/color dot grain.svg"
import image_5 from "../../public/color c grain 1.svg"
import image_6 from "../../public/color c grain 2.svg"
import menu_image from "../../public/menu logo.svg"
import logo_image from "../../public/dark aj logo.svg"
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React, {useState} from "react";

export default function MenuBar() {
    const [menu, menuToggle] = useState(false)
    const [transitionLetter, transitionToggle] = useState(true)
    function next_page() {
        menuToggle(false)
        transitionToggle(true)
    }
    function  toggle_menu() {
        menuToggle(!menu)
        transitionToggle(menu)
    }

    return (
        <div>
            <div className={`h-screen w-screen absolute inset-0 ${menu ? "z-20 bg-background" :"-z-10"} overflow-hidden`}>
                <Image alt="None" className={`absolute rotate-45 j_line -z-10 ${transitionLetter ? "" : "j_line_moved"}`} src={image_1} width="50" height="1"/>
                <Image alt="None" className={`absolute rotate-45 a_left -z-10 ${transitionLetter ? "" : "a_left_moved"}`} src={image_2} width="50" height="1"/>
                <Image alt="None" className={`absolute rotate-45 a_right -z-10 ${transitionLetter ? "" : "a_right_moved"}`} src={image_3} width="50" height="1"/>
                <Image alt="None" className={`absolute rotate-45 a_dot -z-10 ${transitionLetter ? "" : "a_dot_moved"}`} src={image_4} width="90" height="1"/>
                <Image alt="None" className={`absolute rotate-45 a_down -z-10 ${transitionLetter ? "" : "a_down_moved"}`} src={image_5} width="50" height="1"/>
                <Image alt="None" className={`absolute rotate-45 j_dot -z-10 ${transitionLetter ? "" : "j_dot_moved"}`} src={image_4} width="90" height="1"/>
                <Image alt="None" className={`absolute rotate-45 a_up -z-10 ${transitionLetter ? "" : "a_up_moved"}`} src={image_6} width="50" height="1"/>
            </div>
            <div className="top-0 flex justify-between h-20 p-0 m-0 z-50 items-center">
                <Link href="/" className="p-0 m-0 h-20 w-20 z-50">
                    <Button variant="square" className="h-20 w-20 p-0 m-0">
                            <Image src={logo_image} alt="Apple" className="rounded-md object-cover" height="80" width="71"/>
                    </Button>
                </Link>
                <button className="h-20 w-20 p-0 z-50" onClick={() => toggle_menu()}>
                    <AspectRatio ratio={1} className="h-20 w-20">
                        <Image src={menu_image} alt="Apple" className="rounded-md object-cove p-4" fill/>
                    </AspectRatio>
                </button>
            </div>
            <div className={`flex flex-col items-center z-20 ${menu ? '' : 'hidden'}`}>
                <div
                    className="flex flex-col items-center gap-4 justify-center absolute inset-4 z-20 text-left">
                    <div className="menu_container z-50 p-0">
                        <ol className="text-lg m-0 p-0 space-y-5 text-nowrap z-50">
                            <li>
                                <Link href="/">
                                    01<Button variant="big" className="m-0 p-0 text-gray-700 z-50" onClick={next_page}>HOME</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/project">
                                    02<Button variant="big" className="m-0 p-0 text-gray-700 z-50" onClick={next_page}>PROJECTS</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/experience">
                                    03<Button variant="big" className="m-0 p-0 text-gray-700 z-50" onClick={next_page}>EXPERIENCE</Button>
                                </Link>

                            </li>
                            <li>
                                <Link href="/education">
                                    04<Button variant="big" className="m-0 p-0 text-gray-700 z-50" onClick={next_page}>EDUCATION</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/expertise">
                                    05<Button variant="big" className="m-0 p-0 text-gray-700 z-50" onClick={next_page}>EXPERTISE</Button>
                                </Link>
                            </li>
                            <li className="z-50">
                                <Link href="/contact">
                                    06<Button variant="big" className="m-0 p-0 text-gray-700 z-50" onClick={next_page}>CONTACT</Button>
                                </Link>
                            </li>
                        </ol>
                    </div>
                    <div className="menu_container z-20 p-0 justify-evenly flex flex-row">
                        <Link href="https://github.com/atishayj2202"><Button variant="link" className="text-2xl z-20">Resume</Button></Link>
                        <Link href="https://github.com/atishayj2202"><Button variant="link" className="text-2xl z-20">GitHub</Button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}