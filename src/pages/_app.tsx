import Layout from '@/components/layout/Layout';
import AllArticles from '@/components/storyblok/AllArticles';
import Article from '@/components/storyblok/Article';
import Feature from '@/components/storyblok/Feature';
import Grid from '@/components/storyblok/Grid';
import Page from '@/components/storyblok/Page';
import Teaser from '@/components/storyblok/Teaser';
import '@/styles/globals.css';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import type { AppProps } from 'next/app';


const components = {
  'all-articles': AllArticles,
  article: Article,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page
};

storyblokInit({
  accessToken: process.env.STORYBLOK_KEY,
  use: [apiPlugin],
  components
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
