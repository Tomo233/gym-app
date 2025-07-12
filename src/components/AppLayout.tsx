import { Outlet } from "react-router";
import Header from "./Header";
import Container from "./Container";

function AppLayout() {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <Container>
        <Header />
        <Outlet />
      </Container>
    </div>
  );
}

export default AppLayout;
