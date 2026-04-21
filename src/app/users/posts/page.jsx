import Link from "next/link";

const PostsPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    console.log(posts)


    return (
        <div className="grid grid-cols-3 gap-3 w-11/12 py-6">
            {
                posts.map(post => <div key={post.id} className="card bg-base-100 card-xs shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">{post.userId}</h2>
                        <p>{post.title}</p>
                        <Link href={`/users/posts/${post.id}`} className="justify-end card-actions">
                            <button className="btn btn-primary">Show Post</button>
                        </Link>
                    </div>
                </div>)
            }

        </div>
    );
};

export default PostsPage;