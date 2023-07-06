import React from 'react'
import Article  from './Article'

function ArticleList({posts}){
console.log(ArticleList)

    const post = posts.map((posts) =>
        {
            return <Article key={posts.id}  {...posts}/>
        })
        return(
        <main>
            {post}
        </main>
    )
}















export default ArticleList