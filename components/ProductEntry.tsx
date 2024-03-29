import { ProductModel } from "@/models/ProductModel";
import { Card } from "react-bootstrap"
import styles from "../styles/NewsArticleEntry.module.css";
import Image from "next/image";
import placeholderImage from '../assets/newsarticle_placeholder.jpg'

interface ProductEntryProps {
    article: ProductModel,
}

const ProductEntry = ({ article: {id,name, image} }: ProductEntryProps) => {

    const validImageUrl = (image?.startsWith("http://") || image?.startsWith("https://")) || image ? image : undefined;
    return ( 
        <a href={`/products/${id}`} className="text-decoration-none text-capitalize">
        <Card className='h-100'>
            <Image
                src={validImageUrl || placeholderImage}
                width={500}
                height={200}
                alt="News article image"
                className={`card-img-top ${styles.image}`}
            />
            <Card.Body style={{background: "#EADED7"}}>
                
                <Card.Title >{name}</Card.Title>
            </Card.Body>
        </Card>

    </a>


     );
}
 
export default ProductEntry;