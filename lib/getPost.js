export default async function getPosts(id) {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await result.json();
  
    return data;
  }
  