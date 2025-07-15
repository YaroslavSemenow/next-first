import {NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import {Post as PostType} from "@/types/post";

export const GET = async (_: never, {params}: any): Promise<NextResponse<PostType>> => {

    const {id} = params;

    try {
        await connect();

        const post = await Post.findById(id);

        return new NextResponse(JSON.stringify(post), {status: 200});
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