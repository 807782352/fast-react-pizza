import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

export default function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      {isLoading && <Loader />}
      {/* {true && <Loader />} */}

      <div className="overflow-scroll">
        <main className="mx-auto max-w-5xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
