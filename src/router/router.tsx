import { Layout } from "components";
import { RequareAuth } from "components";
import {
  AccountPage,
  BookPage,
  CartPage,
  FavoritesPage,
  HomePage,
  ResetPage,
  SearchPage,
  SignPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.BOOK} element={<BookPage />} />
      <Route path={ROUTE.SIGN} element={<SignPage />} />

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTE.RESET} element={<ResetPage />} />
      </Route>
    </Route>,
  ),
);
