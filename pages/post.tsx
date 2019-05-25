import axios from 'axios'

import Layout from '../components/layout'

const Post = ({ post }) => (
  <Layout>
    <p className="title">{post.title}</p>
    <div className="content">
      <p>{post.content}</p>
    </div>
  </Layout>
)

Post.getInitialProps = async context => {
  const { id } = context.query
  const res = await axios.get(`http://localhost:5000/api/v1/posts/${id}`)
  const post = await res.data
  return { post: post.data }
}

export default Post
