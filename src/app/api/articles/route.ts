import { NextResponse } from "next/server"
import data from "@/data/textData.json"
const { articles } = data


export async function GET() {
    return NextResponse.json(articles)
}
