import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'PostsLayout metadata'
}
type Props = { children: React.ReactNode }
const PostsLayout = ({children}: Props) => {
    return (
        <>
            <div>posts layout</div>
            {children}
        </>
    );
};

export default PostsLayout;