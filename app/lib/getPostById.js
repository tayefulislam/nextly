export default async function getPostById(id) {
  const result = await fetch(
    `https://cufeed.apis.bluespacejp.com/api/v1/blogPosts/${id}`
  );
  return result.json();
}
