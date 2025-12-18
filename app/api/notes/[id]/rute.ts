import { NextResponse } from "next/server"; 
import { Prisma } from "@/app/libs/prisma";

export async function GET()
{
    const notes = await prisma.notes.findMany()
    console.log(notes)
}