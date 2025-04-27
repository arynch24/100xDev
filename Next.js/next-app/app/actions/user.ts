"use server"

import { PrismaClient } from "../generated/prisma";

export async function signUp(username: string, password: string) {
    const client = new PrismaClient();

    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    console.log(user.id);

    return "Signed up!"
}