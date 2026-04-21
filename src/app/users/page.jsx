import Image from "next/image";

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users)

    return (
        <div className="grid grid-cols-3 gap-3 w-11/12 mx-auto py-10">
            {
                users.map(user => <div key={user.id} className="card bg-base-100 shadow-sm">
                    <figure>
                        <Image
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"  height={500} width={500}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <p>{user.email}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show info</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default UsersPage;