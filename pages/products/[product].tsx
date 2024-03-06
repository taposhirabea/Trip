import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProductModel } from '@/models/ProductModel';
import Image from "next/image";
import placeholderImage from '../../assets/newsarticle_placeholder.jpg'

// Fetch the product details based on the product ID
const fetchProductDetails = async (productId: string) => {
  try {
    // Implement your API call or data fetching logic here
    const response = await fetch(`https://course-api.com/react-store-single-product?id=${productId}`);
    const productDetails = await response.json();
    return productDetails as ProductModel;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
};

const ProductDetailsPage = () => {
  const router = useRouter();
  const { product: productId } = router.query;
  const [productDetails, setProductDetails] = useState<ProductModel | null>(null);

  useEffect(() => {
    const getProductDetails = async () => {
      if (productId && typeof productId === 'string') {
        const details = await fetchProductDetails(productId);
        setProductDetails(details);
      }
    };

    getProductDetails();
  }, [productId]);

  if (!productDetails) {
    // You can show a loading state or redirect to an error page
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section className="single-product py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-lg-4 my-5 text-center">
            <div className="single-product-img-container">
              {/* <img src={productDetails.image} alt="door" className="img-fluid"/> */}
              <Image src={productDetails.image || placeholderImage} alt='door' className='img-fluid' width={500}
                height={200}/>

            </div>
            <div className="row simgle-product-photos mt-3">
             
              <div className="col-2 col-sm-2 p-1 single-product-photo">
                <img src="" alt="" className="img-fluid"/>
              </div>
          
            </div>
          </div>
          
          <div className="col-10 col-lg-8 mx-auto px-lg-5 single-product-info my-5">
           
            
          
            <h2 className="text-capitalize my-2">
              Product Name: <span className='text-secondary'>{productDetails.name}</span>
            </h2>
            <h2 className=" my-2">
              Price: ${productDetails.price}
            </h2>
            <p className="lead text-muted">
              {productDetails.description}
            </p>
           
        
            <div className="d-flex my-2">
              <span className="btn btn-black mx-1">-</span>
              <span className="btn btn-black mx-1">4</span>
              <span className="btn btn-black mx-1">+</span>
            </div>

            <button className="btn btn-yellow my-2 mx-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ProductDetailsPage;
