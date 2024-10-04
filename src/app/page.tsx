"use client";

import { Button } from "@/components/button";
import Loading from "@/components/loading";
import { Paginate } from "@/components/paginate";
import { IMAGE_BASE_URL } from "@/constants/imageBaseURL";
import { ICategory } from "@/interfaces/category";
import { IMovie } from "@/interfaces/movie";
import { IPaginate } from "@/interfaces/paginate";
import { CategoryList } from "@/layout/category-list";
import Footer from "@/layout/footer";
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
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoriesList[0].route
  );

  const [paginate, setPaginate] = useState<IPaginate>({
    currentPage: 1,
    totalPages: 0,
  });

  const fetchMovies = async (
    selectedCategory: string = categoriesList[0].route,
    page: number = paginate.currentPage
  ) => {
    setLoading(true);
    try {
      const response = await api.get(
        `${selectedCategory}?language=en-US&page=${page}`
      );
      setMovies(response.data.results);
      setPaginate({
        currentPage: response.data.page,
        totalPages: response.data.total_pages,
      });
    } catch (err) {
      console.error(`Failed to fetch movies. Error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(selectedCategory, 1);
  }, []);

  const handlePageChange = (page: number) => {
    fetchMovies(selectedCategory, page);
  };

  return (
    <>
      <Header backgroundImage="/images/maxxxine-banner.jpg" pageType="home">
        <h1>Movies List</h1>

        <CategoryList>
          {categoriesList.map((category) => (
            <li key={category.id}>
              <Button
                onClick={() => {
                  fetchMovies(category.route, 1);
                  setSelectedCategory(category.route);
                }}
                styleType="colorful"
                text={category.title}
              />
            </li>
          ))}
        </CategoryList>
      </Header>
      <main>
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
                      </Link>
                    </MovieCard>
                  );
                })}
              </MovieList>
            )}
          </>
        )}
      </main>

      <Paginate paginate={paginate} handlePageChange={handlePageChange} />

      <Footer />
    </>
  );
}
