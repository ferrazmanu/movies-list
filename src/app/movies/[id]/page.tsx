"use client";

import { IMovie } from "@/interfaces/movie";
import api from "@/lib/axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const params = useParams();
  const router = useRouter();
  const { id: movieId } = params;

  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async (id: string) => {
    if (id) {
      try {
        const response = await api.get(id);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch movie details");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (!movieId) return;
    fetchMovie(movieId as string);
  }, [movieId]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }
  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Year: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
      <button onClick={() => router.back()}>Back to Movies List</button>
    </>
  );
}
