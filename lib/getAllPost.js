export default async function getAllPosts() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      next:{
        revalidate:10,
      }
    },
  );
  const data = await result.json();

  if (!result.ok) {
    throw new Error("There is an error.");
  }

  return data;
}
