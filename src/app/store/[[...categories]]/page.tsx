import {Metadata} from "next";

interface CategoryProps {
    params: Promise<{ categories: string[] }>,
    searchParams?: Promise<{ [keyword: string] : string}>,
}
export const metadata: Metadata = {
    title: "Categories",
};

export default async function Categories(props: CategoryProps) {
    const { categories } = await props.params
    const searchParams = await props.searchParams;
    console.log(searchParams)
    return (
        <>
            <h1>Category {categories}</h1>
            <ul>
                {searchParams && Object.entries(searchParams).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}
            </ul>
        </>

    )
}