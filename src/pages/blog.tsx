import Head from "next/head"
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react"
 
  type Props = {
    story: any
  }

export default function Blog({story} : Props) {

  console.log(story)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>
          { story ? story.name : 'Blog page' }
        </h1>
      </header>
 
      <main>
      <StoryblokComponent blok={story.content} />
      </main>
    </div>
  )
}
 
export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "blog";
    
  type sbParamsType = {
    version: "draft" | "published"
  }

  let sbParams:sbParamsType  = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

// Can also be server side rendered
// export async function getServerSideProps(context) {
//   // get the query object
//   const insideStoryblok = context.query._storyblok;
 
//   let slug = "home";
 
//   let sbParams = {
//     version: "published", // or 'draft'
//   };
 
//   if (insideStoryblok) {
//     sbParams.version = "draft";
//   }
 
//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//     },
//   };
// }
