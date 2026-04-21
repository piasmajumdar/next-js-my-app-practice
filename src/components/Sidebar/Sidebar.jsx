"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, User, ShoppingCart, Settings } from "lucide-react";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/", icon: <Home size={20} /> },
        { name: "Users", href: "/profile", icon: <User size={20} /> },
        { name: "Settings", href: "/settings", icon: <Settings size={20} /> },
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg"
            >
                <Menu size={20} />
            </button>

            {/* Overlay (Mobile) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h1 className="text-xl font-bold">Practice</h1>
                    <button
                        onClick={() => setOpen(false)}
                        className="md:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="p-4 space-y-2">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    ))}
                </nav>

                {/* Footer */}
                <div className="absolute bottom-0 w-full p-4 border-t border-gray-700 text-sm text-gray-400">
                    © 2026 MyApp
                </div>
            </aside>
        </>
    );
}