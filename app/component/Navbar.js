import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 h-1/6 bg-zinc-800">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-neutral-50">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/login"><button className="btn btn-info">Button</button></Link></li>
                    <li><a><button className="btn btn-info btn-outline">Button</button></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar