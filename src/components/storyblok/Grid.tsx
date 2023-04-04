import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
type GridProps = {
  blok: any;
};

const Grid = ({ blok }: GridProps) => {
  console.log(blok)
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;