"use client";

import { Button } from "@/components/button";
import Loading from "@/components/loading";
import { IMAGE_BASE_URL } from "@/constants/imageBaseURL";
import { IMovie } from "@/interfaces/movie";
import { FixedBanner } from "@/layout/fixed-banner";
import { Header } from "@/layout/header";
import { MainContainer } from "@/layout/main-container";
import api from "@/lib/axios";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const params = useParams();
  const router = useRouter();
  const { id: movieId } = params;

  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(true);

  const ADULT_KEYS = {
    true: "Yes",
    false: "No",
  };

  const fetchMovie = async (id: string) => {
    if (id) {
      try {
        const response = await api.get(id);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        console.error(`Failed to fetch movie details. Error: ${err}`);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (!movieId) return;
    fetchMovie(movieId as string);
  }, [movieId]);

  if (loading) {
    return <Loading />;
  }
  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <>
      <Header
        backgroundImage={`${IMAGE_BASE_URL}${movie.poster_path}`}
        pageType="details"
      >
        <h2>{movie.title}</h2>

        <Button
          onClick={() => router.back()}
          text="Back to Movies List"
          styleType="regular"
        />
      </Header>

      <MainContainer>
        <h3>"{movie.tagline || movie.title}"</h3>
        <p style={{ textAlign: "center" }}>{movie.overview}</p>
      </MainContainer>

      <FixedBanner image={`${IMAGE_BASE_URL}${movie.backdrop_path}`} />

      <MainContainer>
        <div className="grid">
          <p>
            <b>Release Date:</b>{" "}
            {dayjs(movie.release_date).format("MMMM D, YYYY")}
          </p>
          <p>
            <b>Rating:</b> {movie.vote_average.toFixed(1)}/10
          </p>
          <p>
            <b>Adult:</b> {ADULT_KEYS[movie.adult ? "true" : "false"]}
          </p>
          <p>
            <b>
              Genre{movie.genres && movie.genres?.length > 1 ? "s" : null}:{" "}
            </b>
            {movie.genres?.map((item) => item.name).join(", ")}
          </p>
          <p>
            <b>Runtime:</b> {movie.runtime}min
          </p>
          <p>
            <b>Status:</b> {movie.status}
          </p>
          <p>
            <b>
              Spoken Language
              {movie.spoken_languages && movie.spoken_languages?.length > 1
                ? "s"
                : null}
              :
            </b>{" "}
            {movie.spoken_languages?.map((item) => item.name).join(", ")}
          </p>
          <p>
            <b>Produced By: </b>
            {movie.production_companies?.map((item) => item.name).join(", ")}
          </p>
        </div>
      </MainContainer>
    </>
  );
}
