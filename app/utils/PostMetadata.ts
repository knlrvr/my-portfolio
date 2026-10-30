import fs from 'fs'
import matter from "gray-matter";
import { getReadTime } from "./read-time"

export interface PostMetadata {
    title: string,
    date: string,
    prevDate: string,
    description: string,
    tags: string[],
    slug: string,
    image?: string,
    readTime: string;
}

const getPostMetadata = (): PostMetadata[] => {
    const folder = './posts';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".mdx"));
  
    // get data from file 
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`./posts/${fileName}`, 'utf8');
      const matterResult = matter(fileContents);
  
      const readTime = getReadTime(matterResult.content);

      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        prevDate: matterResult.data.prevDate,
        description: matterResult.data.description,
        tags: matterResult.data.tags,
        slug: fileName.replace(".mdx", ""),
        readTime,
      }
    });
  
    return posts;
}

export default getPostMetadata