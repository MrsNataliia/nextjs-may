import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'PostsLayout metadata'
}
type Props = { children: React.ReactNode }
const PostLayout = ({children}: Props) => {
    return (
        <>
            <div>post layout</div>
            {children}
        </>
    );
};

export default PostLayout