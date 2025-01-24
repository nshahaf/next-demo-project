//rendering a dynamic page on the server side (like blog post or any static data)

async function fetchCardData(id) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(`${baseUrl}/api/cards/${id}`, { method: 'GET', cache: 'no-cache' })
    const data = await res.json()
    return data
}


export default async function page({ params }) {
    const { id } = await params
    const card = await fetchCardData(id)
    return (
        <div>
            <h5 style={{ textAlign: 'center', marginBlock: '40px', }}>Fetching data - Dynamic route - Server component</h5>
            <pre>{JSON.stringify(card, null, 2)}</pre>
        </div>
    )
}