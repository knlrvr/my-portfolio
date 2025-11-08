import fs from 'fs'
import matter from "gray-matter";
import readingTime from "reading-time"

export interface PostMetadata {
    title: string,
    date: string,
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
  
      const readTime = readingTime(matterResult.content).text;

      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        tags: matterResult.data.tags,
        slug: fileName.replace(".mdx", ""),
        readTime,
      }
    });
  
    return posts;
}

export default getPostMetadata