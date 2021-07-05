import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import RSS from "rss";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export const generateRss = (blogPosts) => {
  const feed = new RSS({
    title: "Blog de Jesús Gándara Marínez",
    site_url: "https://jesusgm.github.com",
    feed_url: "https://jesusgm.github.com/feed.xml",
    author: "Jesús Gándara Martínez",
  });

  blogPosts.sort(dateSortDesc).forEach((post) => {
    const postDate = Date.parse(post.date);

    // Remember to change this URL to your own!
    const postLink = `https://jesusgm.github.com/blog/${post.id}`;

    const postContent = getPostData(post.id);

    feed.item({
      title: post.title,
      guid: post.id,
      url: postLink,
      date: postDate,
      description: postContent,
      author: "Jesús Gándara Martínez",
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync("./public/feed.xml", rss);
};

function dateSortDesc(a, b) {
  const date1 = new Date(a.date);
  const date2 = new Date(b.date);

  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}
