import { useEffect, useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const GITHUB_USERNAME = "fiyameta-hub"; 
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`; 

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="pb-8 px-7 dark:bg-black bg-white h-auto" id="repositories">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-[#FFFFA9] text-black text-center mb-10 pt-6">Repositories</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading repositories...</p>
      ) : (
        <div className="flex items-start flex-wrap justify-center gap-5 my-8">
          {repos.map((repo) => (
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              key={repo.id}
              className="dark:bg-black/90 bg-white rounded-xl shadow-md shadow-xl transition-all duration-300 ease-in-out w-[22rem] p-5"
            >
              <h3 className="text-xl font-bold dark:text-[#FFFFA9] mb-2">
                {repo.name}
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-300 mb-4">
                {repo.description || "No description available"}
              </p>
              
              <div className="flex items-center justify-between">
              <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="dark:text-white w-9 h-9" />
                  </a>
                <span className="text-gray-800 dark:text-gray-300 text-sm">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Repositories;