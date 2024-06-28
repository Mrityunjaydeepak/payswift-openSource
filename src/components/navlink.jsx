"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({link}) => {
    const pathName =  usePathname()
    console.log(pathName)

    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-green-60 text-black"} `}href={link.url}> {link.title} </Link>
    )
    
};
