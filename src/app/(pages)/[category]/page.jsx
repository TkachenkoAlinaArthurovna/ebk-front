import { notFound } from 'next/navigation';

export default function DynamicPage({params}) {
    if(params.category.includes("category")) {
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
