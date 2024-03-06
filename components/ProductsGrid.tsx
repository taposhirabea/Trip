import { useState } from 'react';
import { ProductModel } from "@/models/ProductModel";
import { Col, Row } from "react-bootstrap"
import ProductEntry from "./ProductEntry";
import Filters from "./Filters";

interface ProductsGridProps {
    articles: ProductModel[],
}

const ProductsGrid = ({ articles }: ProductsGridProps) => {
    const [filters, setFilters] = useState({
        searchTerm: '',
        category: '',
      });

      const handleFilterChange = (newFilters: { searchTerm?: string, category?: string }) => {
        setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
      };
    
      const filteredArticles = articles.filter(article => {
        const nameMatch = article.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
        const categoryMatch = !filters.category || article.category === filters.category;
        return nameMatch && categoryMatch;
      });
      const categories = Array.from(new Set(articles.map((product) => product.category)));
    
    return ( 
        <section>
            <Filters filters={filters} categories={categories} onFilterChange={handleFilterChange}/>
            <Row xs={1} sm={2} xl={3} className="g-4">
    
            {filteredArticles.map(article => (
          <Col key={article.id}>
            <ProductEntry article={article} />
          </Col>
        ))}
        </Row>
        </section>

     );
}
 
export default ProductsGrid;