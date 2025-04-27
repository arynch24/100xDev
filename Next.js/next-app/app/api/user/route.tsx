import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();

    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    console.log(body);

    return NextResponse.json({
        message: "You are logged in!! Hheheh"
    })

}