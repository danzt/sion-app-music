import { useQuasar } from "quasar";

export default function useNotify() {
  const $q = useQuasar();

  const notifySuccess = (message) => {
    $q.notify({
      type: "positive",
      message: message || "Perfect ✅",
      timeout: 2000,
      icon: "thumb_up",
      actions: [
        {
          label: "Ok",
          color: "white",
        },
      ],
    });
  };

  const notifyError = (message) => {
    $q.notify({
      type: "negative",
      message: message || "something has gone wrong! 😢",
      timeout: 2000,
      icon: "error",
      actions: [
        {
          label: "Ok",
          color: "white",
        },
      ],
    });
  };

  const notifyWarnig = (message) => {
    $q.notify({
      type: "warning",
      message: message || "Attention ⚠️",
      textColor: "white",
      timeout: 2000,
      icon: "warning",
      actions: [
        {
          label: "Ok",
          color: "white",
        },
      ],
    });
  };

  const notifyOngoing = (onMessage, message, type) => {
    const notif = $q.notify({
      type: "ongoing",
      textColor: "white",
      icon: "pending",
      message: onMessage || "One moment... ⏱️",
    });

    setTimeout(() => {
      notif({
        type: type,
        message: message || "Return a setTimeout",
        timeout: 2000,
        actions: [
          {
            label: "Ok",
            color: "white",
          },
        ],
      });
    }, 3000);
  };

  return {
    notifySuccess,
    notifyError,
    notifyWarnig,
    notifyOngoing,
  };
}
