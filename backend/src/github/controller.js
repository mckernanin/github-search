const got = require("got");

const github = got.extend({
  baseUrl: "https://api.github.com/",
  json: true
});

const search = async (req, res) => {
  const { query, sort, page } = req.query;
  const { body } = await github.get(
    `/search/repositories?q=${query}&sort=${sort}&page=${page}`
  );
  const repos = body.items.map(item => {
    const {
      owner,
      name,
      description,
      stargazers_count: stars,
      html_url: url,
      language
    } = item;
    return {
      name,
      description,
      stars,
      language,
      owner,
      url
    };
  });
  res.json({ query, sort, count: repos.length, repos });
};

module.exports = {
  search
};
