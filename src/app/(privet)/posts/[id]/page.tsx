import React from 'react';

type Params = {id: string}

const PostPage = async ({params}: {params: Params}) => {

    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id).then(res => res.json());

    return (
        <div>
            <ul>
                <li>
                    UserID: {post.useId}
                </li>
                <li>
                    PostID: {post.id}
                </li>
                <li>
                    {post.body}
                </li>
            </ul>
        </div>
    );
};

export default PostPage;