import { useEffect } from "react";
import MainRouter from "./routes/main-router";
import { UserService } from "./services/user-service";
import { userUpdate } from "./store/reducers/auth/auth.slice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
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
