import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
type PageProps = {
  blok: any;
};

const Page = ({ blok } : PageProps) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
 
export default Page;