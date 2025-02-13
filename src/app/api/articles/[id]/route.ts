import { NextResponse } from "next/server";
import data from '@/data/textData.json';

const { articles } = data;

interface Context {
    params: Promise<{ id: string }>
}

export async function GET(request: Request, context: Context) {
    // No need to await context or params
    const { id } = await context.params; // Directly destructure 'id' from 'params'
    const article = articles.find((article) => article.id === Number(id));

    // Ensure article exists before returning a response
    if (!article) {
        return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    return NextResponse.json(article);
}
