import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(_request: Request, { params }: RouteParams) {
  const noteId = Number(params.id);
  if (Number.isNaN(noteId)) {
    return NextResponse.json({ error: "Invalid note id" }, { status: 400 });
  }

  const note = await prisma.note.findUnique({
    where: { id: noteId },
  });

  if (!note) {
    return NextResponse.json({ error: "Note not found" }, { status: 404 });
  }

  return NextResponse.json(note);
}
