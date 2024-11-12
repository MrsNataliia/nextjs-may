import React, {FC} from 'react';
import Link from "next/link";


type Props={
    posts: {id: number, title: string}[]
}

const PostsComponent: FC<Props> = ({posts}) => {
    return (
        <div>

            {
                posts.map(({id, title}) => (<div key={id}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Link href={'/posts/' + id}>{title}</Link>

                </div>))

            }


        </div>
    );
};

export default PostsComponent;