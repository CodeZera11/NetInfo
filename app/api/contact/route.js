import Contact from "@/models";
import connectToDB from "@/utils";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try {
        await connectToDB();

        const details = await req.json();

        await Contact.create(details)

        return NextResponse.json({message: "Data sent successfully"}, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Internal Server Error!"}, {status: 500})
    }
}