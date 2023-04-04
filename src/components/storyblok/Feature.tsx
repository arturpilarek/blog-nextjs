import { storyblokEditable } from "@storyblok/react";
 
type FeatureProps = {
  blok: any;
};

const Feature = ({ blok }: FeatureProps) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
export default Feature;