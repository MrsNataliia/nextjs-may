import React from 'react';

type Params = {id: string}

const CommentPage = async ({params}: {params: Params}) => {

    const comment = await fetch('https://jsonplaceholder.typicode.com/comments/' + params.id).then(res => res.json());

    return (
        <div>
            <ul>
                <li>
                    PostID: {comment.postId}
                </li>
                <li>
                    Email: {comment.email}
                </li>

                <li>
                    CommentID: {comment.id}
                </li>
                <li>
                    {comment.body}
                </li>
            </ul>

        </div>
    );
};

export default CommentPage;