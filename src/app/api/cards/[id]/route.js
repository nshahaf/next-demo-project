import { NextResponse } from "next/server"
import data from '@/data/textData.json'
const { cards } = data


export async function GET(_, context) {
    const { params } = await context
    const { id } = await params
    const card = cards.find((card) => card.id === Number(id))
    return NextResponse.json(card)
}

