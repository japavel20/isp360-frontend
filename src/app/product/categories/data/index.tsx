export async function fetchCategories() {
    // const apiUrl = `${process.env.NEXTAUTH_URL}/categories`;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

    try {
        const res = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error(`Error fetching categories: ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        return [];
    }
}
