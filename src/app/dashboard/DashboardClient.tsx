"use client";

import useSWR from "swr";

function Dashboard() {
    const fetcher = (...args: any[]) => fetch(...args).then(res => res.json());

    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard