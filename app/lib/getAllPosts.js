export default async function getAllPosts() {
  const result = await fetch(
    "https://cufeed.apis.bluespacejp.com/api/v1/blogPosts"
  );
  return result.json();
}
