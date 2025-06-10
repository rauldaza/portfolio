import { useEffect, useState } from "react";
import { PortfolioCard } from "./PortfolioCard";

const repos = [
  {
    name: "Carposoft",
    url: "https://github.com/rauldaza/Carposoft",
    image: "/images/UdeA.png",
    api: "https://api.github.com/repos/rauldaza/Carposoft",
  },
  {
    name: "ANNs-from-Scratch-Breast-Cancer-Detection",
    url: "https://github.com/rauldaza/ANNs-from-Scratch-Breast-Cancer-Detection",
    image: "/images/UdeA.png",
    api: "https://api.github.com/repos/rauldaza/ANNs-from-Scratch-Breast-Cancer-Detection",
  },
  {
    name: "JIMMED-EXPRESSWAY",
    url: "https://github.com/rauldaza/JIMMED-EXPRESSWAY",
    image: "/images/UdeA.png",
    api: "https://api.github.com/repos/rauldaza/JIMMED-EXPRESSWAY",
  },
  {
    name: "Mask-Feature-Clustering-KMeans-Fuzzy-C-Means",
    url: "https://github.com/rauldaza/Mask-Feature-Clustering-KMeans-Fuzzy-C-Means",
    image: "/images/UdeA.png",
    api: "https://api.github.com/repos/rauldaza/Mask-Feature-Clustering-KMeans-Fuzzy-C-Means",
  },
  {
    name: "Rick-Morty-Game-CPP-Project-with-Qt",
    url: "https://github.com/rauldaza/Rick-Morty-Game-CPP-Project-with-Qt",
    image: "/images/UdeA.png",
    api: "https://api.github.com/repos/rauldaza/Rick-Morty-Game-CPP-Project-with-Qt",
  },
  {
    name: "Genetic-Algorithms-for-the-Knapsack-Problem",
    url: "https://github.com/rauldaza/Genetic-Algorithms-for-the-Knapsack-Problem",
    image: "/images/UdeA.png",
    api: "https://api.github.com/repos/rauldaza/Genetic-Algorithms-for-the-Knapsack-Problem",
  },
  {
    name: "SignalEqualizer-DSP",
    url: "https://github.com/rauldaza/SignalEqualizer-DSP",
    image: "/images/UdeA.png",
    api: "https://api.github.com/repos/rauldaza/SignalEqualizer-DSP",
  },
  {
    name: "Steganography-DSP",
    url: "https://github.com/rauldaza/Steganography-DSP",
    image: "/images/UdeA.png",
    api: "https://api.github.com/repos/rauldaza/Steganography-DSP",
  },
];

const Portfolio = () => {
  const [descriptions, setDescriptions] = useState<string[]>([]);

  useEffect(() => {
    Promise.all(
      repos.map(async (repo) => {
        try {
          const res = await fetch(repo.api);
          const data = await res.json();
          return data.description || "No description available";
        } catch (err) {
          return "Failed to load description";
        }
      })
    ).then(setDescriptions);
  }, []);

  return (
    <div className="portfolio grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo, idx) => (
        <PortfolioCard
          key={repo.name}
          title={repo.name}
          description={descriptions[idx] || "Loading..."}
          image={repo.image}
          link={repo.url}
          linkText="Visit site"
        />
      ))}
    </div>
  );
};

export { Portfolio };
