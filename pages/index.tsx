import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import {getPosts} from '../services';
import {PostCard,Categories,PostWidget,Header} from '../components';
// const posts =[

//   { 
    
//     title :"Blog Site",
//     excerpt:"Learn Build Blog",
//     author :"Ankit"
//   },
//   { 
    
//     title :"Next with Tailwind",
//     excerpt:"Learn nextjs with tailwind",
//     author: "Ankit"
//   }

// ];
const Home: NextPage = ({posts}:any) => {
  return (
    <div className="container mx-auto px-10 mb-8">
     <Header />
      <div className="container mx-auto flex flex-wrap py-6">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      {posts.map((post:any,index:any) => {
        
        return <div>
          <PostCard post={post.node} key={index} />
        </div>

      })
      }
      </section>
      <div className="w-full md:w-1/3 flex flex-col items-center px-3">
          <PostWidget />
      
          <Categories />
      </div>
      </div>
    </div>

  );
}
export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  // console.log(posts);
  return {
    props: {posts} 
  }

}

export default Home
