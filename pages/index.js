import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { getAllPostsForHome, getMenu } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import React from 'react'

export default function Index({ menuItems: {menu}, allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  const menuItems = menu?.menuItems;
  console.log("menuitems:::::", menuItems);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Navbar urls={menuItems.nodes}/>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const menuItems = await getMenu();
  console.log("::::::::" , menuItems.menu.menuItems.nodes)
  return {
    props: { menuItems, allPosts, preview },
  }
}
