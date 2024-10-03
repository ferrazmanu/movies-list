"use client";

import { ICategory } from "@/interfaces/category";
import { IMovie } from "@/interfaces/movie";
import api from "@/lib/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const categoriesList: ICategory[] = [
  { id: 1, title: "Now Playing", route: "now_playing" },
  { id: 2, title: "Popular", route: "popular" },
  { id: 3, title: "Top Rated", route: "top_rated" },
  { id: 4, title: "Upcoming", route: "upcoming" },
];

export default function MoviesList() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMovies = async (
    selectedCategory: string = categoriesList[0].route
  ) => {
    setLoading(true);
    try {
      const response = await api.get(
        `${selectedCategory}?language=en-US&page=1`
      );
      setMovies(response.data.results);
    } catch (err) {
      console.error("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {categoriesList.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => {
                fetchMovies(category.route);
              }}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>

      <section>
        {loading ? (
          <span> Loading...</span>
        ) : (
          <>
            {movies && (
              <ul>
                {movies.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={`/movies/${item.id}`}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </section>
    </div>
  );
}
