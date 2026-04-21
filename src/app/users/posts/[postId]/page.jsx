import Link from "next/link";

const PostDetail = async ({ params }) => {
    const { postId } = await params;
    // console.log("Post Id from params",postId)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();
    console.log(post)

    return (
        <div>
            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                    <Link href={'/users/posts'} className="justify-end card-actions">
                        <button className="btn btn-primary">Go Back</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PostDetail;