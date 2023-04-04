import { storyblokEditable } from "@storyblok/react";

type TeaserProps = {
  blok: any;
};
 
const Teaser = ({ blok }: TeaserProps) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
 
export default Teaser