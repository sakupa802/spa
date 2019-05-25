import Link from 'next/link'
import axios from 'axios'

import Layout from '../components/layout'

const Index = ({ posts }) => (
  <Layout>
    {posts.map(post => (
      <li key={post.id}>
        <p className="title">
          <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </p>
      </li>
    ))}
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await axios.get('http://localhost:5000/api/v1/posts')
  const posts = await res.data
  return { posts: posts.data }
}

export default Index
