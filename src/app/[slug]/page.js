import { notFound } from 'next/navigation';

export default function DynamicPage({params}) {
    if(params.slug.includes("product")) {
        return (
            <div>
                DynamicPage - Product
                <div>Params:{JSON.stringify(params)}</div>
            </div>
        )
    }if(params.slug.includes("category")) {
        return (
            <div>
                DynamicPage - Category
                <div>Params:{JSON.stringify(params)}</div>
            </div>
        )
    }else{
        notFound();
    }
}
