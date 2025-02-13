import { NextResponse } from "next/server"
import data from '@/data/textData.json'
const { cards } = data


interface Context {
    params: Promise<{ id: string }>
}

export async function GET(_: Request, context: Context) {
    const { id } = await context.params
    const card = cards.find((card) => card.id === Number(id))
    return NextResponse.json(card)
}

