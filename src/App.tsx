import { useEffect } from "react";

import MainRouter from "./routes/main-router";
import { UserService } from "./services/user-service";
import { useDispatch } from "react-redux";
import { userUpdate } from "./store/reducers/auth/auth.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      if (!accessToken && !refreshToken) return;

      const user = await UserService.getUser();

      dispatch(
        userUpdate({
          email: user.data.email,
          username: user.data.username,
        })
      );
    };

    fetchUser();
  }, [dispatch]);

  return (
    <div className="flex h-full">
      <MainRouter />
    </div>
  );
}

export default App;
