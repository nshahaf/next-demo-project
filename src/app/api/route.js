import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({ message: "Hello" })
}

export async function PUT() {
    return NextResponse.json({ message: "Hello" })
}

export async function POST(req) {
    const data = await req.json()
    return NextResponse.json(data)
}

export async function DELETE() {
    return NextResponse.json({ message: "Hello" })
}