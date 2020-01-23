export const PREVIEW_BASH =
    process.env.NODE_ENV === "development"
        ? "http://localhost:8080/preview/"
        : "https://uniapp.pocky.top/preview/#/preview/";
