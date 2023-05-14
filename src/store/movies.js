import { createSlice } from "@reduxjs/toolkit";
import topGun from "../assets/top-gun-maverick.jpg";
import topGunLg from "../assets/top-gun-maverick-lg.jpg";
import robinHood from "../assets/robin-hood.jpg";
import robinHoodLg from "../assets/robin-hood-lg.jpg";
import blackWidow from "../assets/black-widow.jpg";
import blackWidowLg from "../assets/black-widow-lg.jpg";
import shangChi from "../assets/shang-chi.jpg";
import shangChiLg from "../assets/shang-chi-lg.jpg";

const initialState = {
  value: [
    {
      id: 1,
      title: "Black Widow",
      genres: ["Action", "Adventure", "Fantasy"],
      description:
        "Natasha Romanoff, a member of the Avengers and a former KGB spy, is forced to confront her dark past when a conspiracy involving her old handler arises.",
      dates: [],
      ticketsNumber: 24,
      img: blackWidow,
      imgLg: blackWidowLg,
      alt: "Black Widow poster",
    },
    {
      id: 2,
      title: "Shang-Chi and the Legend of the Ten Rings",
      genres: ["Action", "Adventure", "Fantasy"],
      description:
        "Shang-Chi, a martial artist, lives a quiet life after he leaves his father and the shadowy Ten Rings organisation behind. Years later, he is forced to confront his past when the Ten Rings attack him.",
      dates: [
        "2023-02-20T14:00:00",
        "2023-02-21T14:00:00",
        "2023-02-22T14:00:00",
        "2023-02-23T14:00:00",
        "2023-02-24T14:00:00",
      ],
      ticketsNumber: 24,
      img: shangChi,
      imgLg: shangChiLg,
      alt: "Shang-Chi poster",
    },
    {
      id: 3,
      title: "Robin Hood",
      genres: ["Action", "Adventure", "Fantasy"],
      description:
        "Lord Robin of Loxley, an aristocrat and an English longbow master, lives in Nottingham and enjoys a good life with his lover Marian, before he is drafted by the corrupt Sheriff of Nottingham to fight in the Third Crusade against the Saracens.",
      dates: ["2023-02-20T14:00:00", "2023-02-21T14:00:00", "2023-02-22T14:00:00"],
      ticketsNumber: 24,
      img: robinHood,
      imgLg: robinHoodLg,
      alt: "Robin Hood poster",
    },
    {
      id: 4,
      title: "Top Gun: Maverick",
      genres: ["Action", "Adventure", "Drama"],
      description:
        "After more than 30 years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
      dates: ["2023-02-20T14:00:00", "2023-02-21T14:00:00", "2023-02-22T14:00:00"],
      ticketsNumber: 24,
      img: topGun,
      imgLg: topGunLg,
      alt: "Top Gun: Maverick poster",
    },
  ],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
});

export default moviesSlice.reducer;
