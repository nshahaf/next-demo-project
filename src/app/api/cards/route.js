import { NextResponse } from "next/server"
import data from "@/data/textData.json"
const { cards } = data


export async function GET(req) {
    return NextResponse.json(cards)

}
