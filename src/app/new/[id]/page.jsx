'use client'
import React from 'react'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Page({ params }) {
    const { id } = React.use(params)
    const { data: article, error, isLoading } = useSWR(`/api/articles/${id}`, fetcher)

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>Failed to load</h1>
    return (
        <div>
            <h5 style={{ textAlign: 'center', marginBlock: '40px', }}>Fetching data - Dynamic route - Client component</h5>
            <pre>{JSON.stringify(article, null, 2)}</pre>
        </div>
    )
}