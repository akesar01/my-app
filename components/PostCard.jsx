import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const PostCard = ({post}) => {
  return (
   
    <article className="flex flex-col shadow my-4">
                <Link href="#" className="hover:opacity-75"> <img src={"https://picsum.photos/1000/300"}  /> </Link>
               
                <div className="bg-white flex flex-col justify-start p-6">
                  
                    <Link href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</Link>
                    <p  className="text-sm pb-3">
                        By <Link href="#" className="font-semibold hover:text-gray-800">{}</Link>,Date
                    </p>
                    <Link href="#" className="pb-6">{post.excerpt}</Link>
                    <Link href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></Link>
                </div>
      </article>
          
  )
}

export default PostCard