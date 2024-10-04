"use client";

import { Button } from "@/components/button";
import Loading from "@/components/loading";
import { IMAGE_BASE_URL } from "@/constants/imageBaseURL";
import { ICategory } from "@/interfaces/category";
import { IMovie } from "@/interfaces/movie";
import { CategoryList } from "@/layout/category-list";
import { Header } from "@/layout/header";
import { MovieCard } from "@/layout/movie-card";
import { MovieList } from "@/layout/movie-grid";

import api from "@/lib/axios";
import Image from "next/image";
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
      console.error(`Failed to fetch movies. Error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header backgroundImage="/images/maxxxine-banner.jpg">
        <h1>Movies List</h1>

        <CategoryList>
          {categoriesList.map((category) => (
            <li key={category.id}>
              <Button
                onClick={() => {
                  fetchMovies(category.route);
                }}
                styleType="colorful"
                text={category.title}
              />
            </li>
          ))}
        </CategoryList>
      </Header>
      <section>
        {loading ? (
          <Loading />
        ) : (
          <>
            {movies && (
              <MovieList>
                {movies.map((item) => {
                  return (
                    <MovieCard key={item.id}>
                      <Link href={`/movies/${item.id}`}>
                        <Image
                          alt={item.title}
                          src={`${IMAGE_BASE_URL}${item.poster_path}`}
                          fill
                          priority
                        />
                        {/* <div className="card-info">{item.title}</div> */}
                      </Link>
                    </MovieCard>
                  );
                })}
              </MovieList>
            )}
          </>
        )}
      </section>
    </>
  );
}
