import { ProductModel } from "@/models/ProductModel";
import { Col, Row } from "react-bootstrap"
import ProductEntry from "./ProductEntry";

interface ProductsGridProps {
    articles: ProductModel[],
}

const ProductsGrid = ({ articles }: ProductsGridProps) => {
    return ( 
        <Row xs={1} sm={2} xl={3} className="g-4">
            {articles.map(article => (
                <Col key={article.id}>
                    <ProductEntry article={article} />
                </Col>
            ))}
        </Row>

     );
}
 
export default ProductsGrid;