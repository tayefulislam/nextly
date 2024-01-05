export default async function getCommentsById(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return result.json();
}
