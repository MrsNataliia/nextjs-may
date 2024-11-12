import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'CommentsLayout metadata'
}
type Props = { children: React.ReactNode }
const PostsLayout = ({children}: Props) => {
    return (
        <>
            <div>comments layout</div>
            {children}
        </>
    );
};

export default PostsLayout;