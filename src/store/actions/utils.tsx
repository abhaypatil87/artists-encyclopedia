import { notificationsActions } from "../slices/notifications-slice";

export const dispatchSuccess = (
  dispatch: Function,
  lastOp: string,
  message: string
) =>
  dispatch(
    notificationsActions.showNotification({
      lastOp,
      status: "success",
      message,
    })
  );
