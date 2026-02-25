/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.caculator-world.online',
  generateRobotsTxt: true,
  outDir: 'public',
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      // 禁止 AI 训练和垃圾爬虫（核心优化）
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        disallow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'Amazonbot',
        disallow: '/',
      },
      {
        userAgent: 'Bytespider',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'meta-externalagent',
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/privacy') || path.includes('/terms')) {
      priority = 0.3;
      changefreq = 'monthly';
    } else {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const result = [];
    const languages = ['en', 'es', 'fr', 'de'];
    
    languages.forEach((lang) => {
      result.push({
        loc: `/${lang}`,
        priority: 0.8,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};
