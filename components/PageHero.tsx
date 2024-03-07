import React from 'react'
import chairs from '../assets/chairs.jpg'
import living from '../assets/living-room.jpg'
import Image from "next/image";
import Link from 'next/link';


export default function PageHero() {
  return (
    <div className='row p-5 justify-content-center' style={{background: "#F1F5F8"}}>
        <article className='col col-md-6 '>
        <h1 className='text-capitalize '>
          design your <br />
          comfort zone
        </h1>
        <p className='text-secondary py-3'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link href='/productsPage' className='btn btn-success text-capitalize'>
          shop now
        </Link>
      </article>
      <article className='img-container col-md-6 py-3'>
        <Image src={chairs} alt='nice table ' className='main-img rounded' width={400} height={300}/>
      </article>
    </div>
  )
}
