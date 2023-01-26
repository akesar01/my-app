 import React ,{userContext} from 'react';
 import Link from 'next/link';
 import Head from 'next/head'
 const categories =[{name: 'React',slug:'react'},{name:'Web Development ',slug:'web-dev'}];
 const Header = () => {
  return (
    <div>
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <div className='bg-white font-family-karla'>
    
    <header className="w-full container mx-auto">
    <div className="flex flex-col items-center py-12">
        <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
            Minimal Blog
        </a>
        <p className="text-lg text-gray-600">
            Lorem Ipsum Dolor Sit Amet
        </p>
    </div>
    
</header>
<nav className="w-full py-4 border-t border-b bg-gray-100" >
       
        <div  className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                {
                    categories.map(category=>{
                       
                        <Link key={category.slug} href ={`/category/${category.slug}`}>
                            <span>
                            {category.name}
                            </span>
                            
                        </Link>
                       
                    })
                }
                </div>
           
        </div>
    </nav>
</div>
</div>
  );
}

export default Header;
