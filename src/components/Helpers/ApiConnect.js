const baseLink = "https://api.github.com/search/users?q=";

function getSearchLink(searchName, page = 0) {
  const userName = encodeURI(searchName);
  let apiLink = `${baseLink}${userName}`;

  if (!userName.length) return false;
  if (page > 0) apiLink += `&page=${page}`;

  return apiLink;
}


export {
  getSearchLink,
}
