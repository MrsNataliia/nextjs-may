import React, {FC} from 'react';
import Link from "next/link";

type Params={
    comments: {id: number, name: string}[]
}

const CommentsComponent: FC <Params> = ({comments}) => {

    return (
        <div>
            {
                comments.map(({id, name})=>
                    <div key={id}>
                        <Link href={'/comments/'+ id}>{name}</Link>
                    </div>
                )
            }
        </div>
    );
};

export default CommentsComponent;