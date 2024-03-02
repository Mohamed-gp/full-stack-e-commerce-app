import { NextRequest, NextResponse } from "next/server";
import { Comment } from "../../../../models/Comment";



export async function POST (req: NextRequest) {
    const body = await req.json()

    const comment = {
        text : body.text,
        userId : req.id,
    }
    await Comment.create(comment)

    return NextResponse.json({message : "Comment created succefuly"},{status : 201})
}
export async function DELETE (req: NextRequest) {
    const body = await req.json()
    const id = body.id
    
    await Comment.deleteOne({_id : id})

    return NextResponse.json({message : "Comment deleted succefuly"},{status : 201})
}