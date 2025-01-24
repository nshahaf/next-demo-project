import { NextResponse } from "next/server"
import data from "@/data/textData.json"
const { articles } = data


export async function GET(req) {
    return NextResponse.json(articles)

}
