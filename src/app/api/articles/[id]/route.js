import { NextResponse } from "next/server"
import data from '@/data/textData.json'
const { articles } = data


export async function GET(_, context) {
    const { params } = await context
    const { id } = await params
    const article = articles.find((article) => article.id === Number(id))
    return NextResponse.json(article)
}


