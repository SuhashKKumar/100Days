import { notFound } from "next/navigation";

export default function ProductDetailsLayout({ children, params }) {
  // if (params.productId > 5) return notFound();
  
    return (
      <>
        {children}
        <h2>Feature Products!!</h2>
      </>
    );
}
