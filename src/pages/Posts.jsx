import React, { useEffect, useState } from 'react'
import MyButton from '../components/UI/Button/MyButton'
import MyModal from '../components/UI/MyModal/MyModal'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import PostList from '../components/PostList'
import Pagination from '../components/UI/Pagination/Pagination'
import { getPageCount } from '../utils/pages'
import PostService from '../components/API/PostService'
import useFetching from '../Hooks/useFetching'
import { usePosts } from '../Hooks/usePosts'
import Loader from '../components/UI/Loader/Loader'



function Posts() {

const [posts, setPosts] = useState([])
const [filter, setFilter] = useState ({sort: '', query: ''})
const [modal, setModal] = useState (false)

const [totalPages, setTotalPages]  = useState(0)
const [limit, setLimit]  = useState(10)
const [page, setPage]  = useState(1)
const sortedAndCreatePosts = usePosts(posts, filter.sort, filter.query)



const [fetchPosts, isPostLoading, postError] = useFetching (async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
})


useEffect(() => {
  fetchPosts()
}, [page])


const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}


const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

const changnePage = (page) => {
  setPage(page)
}

  return (
    
    <div className="App">

      <MyButton style={{marginTop: 30}} onClick = {() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create = {createPost}/>
      </MyModal>

      <hr style={{margin: '15px 0'}}/>

      <PostFilter filter={filter} setFilter={setFilter}/>

      {postError && 
        <h1>
          Error
        </h1>
      }

      {isPostLoading
      ?  <div style={{display: 'flex', justifyContent: 'center' , marginTop: '50px'}}><Loader/></div>
      : <PostList remove = {removePost} posts={sortedAndCreatePosts} title={'Список постов 1'} />
      }
      
      <Pagination 
      page={page} 
      changnePage={changnePage} 
      totalPages={totalPages}/>
      
    </div>
  );
}

export default Posts;
