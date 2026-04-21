'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const UsersLayout = ({ children }) => {
    const pathname = usePathname();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    {children}
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link className={pathname === '/users/posts' ? 'border border-blue-500 rounded-md': ''} href={'/users/posts'}>Posts</Link></li>
                        <li><Link className={pathname === '/users/comments' ? 'border border-blue-500 rounded-md': ''} href={'/users/posts'} href={'/users/comments'}>Comments</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default UsersLayout;