import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import {Post as PostType} from "@/types/post";

export const GET = async (_: never): Promise<NextResponse<PostType[]>> => {
    // const username = url.searchParams.get("username");

    try {
        await connect();

        // const posts = await Post.find(username && {username});
        const posts = await Post.find();

        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (err) {
        return new NextResponse("Database Error", {status: 500});
    }
};

export const POST = async (request: any) => {
    const body = await request.json();

    const newPost = new Post(body);

    try {
        await connect();

        await newPost.save();

        return new NextResponse("Post has been created", {status: 201});
    } catch (err) {
        return new NextResponse("Database Error", {status: 500});
    }
};