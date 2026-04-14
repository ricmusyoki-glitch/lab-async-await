const postList = document.querySelector("#post-list");
const fallbackPosts = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

function displayPosts(posts) {
  posts.forEach((post) => {
    const listItem = document.createElement("li");
    const heading = document.createElement("h1");
    const paragraph = document.createElement("p");

    heading.textContent = post.title;
    paragraph.textContent = post.body;

    listItem.append(heading, paragraph);
    postList.appendChild(listItem);
  });
}

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    displayPosts(fallbackPosts);
  }
}

fetchPosts();
