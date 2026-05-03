/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dentakim.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/api/*"],
};
