// 'use client';
// import { notFound } from 'next/navigation';
// import { useSelector } from 'react-redux';
import CategoryPage from "@/app/ui/CategoryPage";

export default function Category() {
  return <CategoryPage/>;
}

// export default function DynamicPage({ params }) {
//   const categoriesLinks = useSelector(
//     (state) => state.categories.categoriesLinks,
//   );
//   console.log(categoriesLinks);
//   if (params.category.includes('category')) {
//     return (
//       <div>
//         DynamicPage - Category
//         <div>Params:{JSON.stringify(params)}</div>
//       </div>
//     );
//   } else {
//     notFound();
//   }
// }
