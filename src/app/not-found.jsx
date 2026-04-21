import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
            <div className="text-center max-w-xl">
                {/* 404 Heading */}
                <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-400 text-sm md:text-base">
                    The page you're looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link href="/">
                    <button className="mt-6 px-6 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 hover:shadow-lg transition-all duration-300">
                        Go Back Home
                    </button>
                </Link>

                {/* Decorative Element */}
                <div className="mt-10 flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>
                </div>
            </div>
        </div>
    );
}