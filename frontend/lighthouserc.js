module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/about",
        "http://localhost:3000/solutions",
        "http://localhost:3000/solutions/self-funded",
        "http://localhost:3000/solutions/insurance",
        "http://localhost:3000/solutions/providers",
        "http://localhost:3000/services",
        "http://localhost:3000/technology",
        "http://localhost:3000/provider-network",
        "http://localhost:3000/hospital-panel",
        "http://localhost:3000/book-demo",
        "http://localhost:3000/request-proposal",
        "http://localhost:3000/contact",
        "http://localhost:3000/privacy",
        "http://localhost:3000/terms",
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--headless=new --no-sandbox --disable-gpu",
      },
    },
    assert: {
      assertions: {
        "categories:performance":     ["warn", { minScore: 0.85 }],
        "categories:accessibility":   ["warn", { minScore: 0.90 }],
        "categories:best-practices":  ["warn", { minScore: 0.90 }],
        "categories:seo":             ["warn", { minScore: 0.90 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
