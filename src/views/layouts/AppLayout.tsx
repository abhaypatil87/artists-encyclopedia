import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Alert, Box, CssBaseline, Snackbar, Toolbar } from "@material-ui/core";
import { RootStateOrAny, useSelector } from "react-redux";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

const AppLayout = () => {
  const [showNotification, setShowNotification] = useState(false);
  const notification = useSelector(
    (state: RootStateOrAny) => state.notifications.notification
  );

  useEffect(() => {
    if (notification && notification.message !== null) {
      setShowNotification(true);
    }
  }, [notification, setShowNotification]);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box
        component="div"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {notification && notification.message && (
          <Snackbar
            open={showNotification}
            autoHideDuration={5000}
            onClose={handleCloseNotification}
          >
            <Alert variant={"filled"} severity="success" sx={{ width: "100%" }}>
              {notification.message}
            </Alert>
          </Snackbar>
        )}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
