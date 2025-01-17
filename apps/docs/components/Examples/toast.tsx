import { Toast } from "@rafty/ui";

export const toast_examples = {
  "toast:usage": <Toast title="Success Banner" severity="success" />,
  "toast:message": (
    <Toast
      title="Success Banner"
      message="Data uploaded to the server. Fire on!"
      severity="info"
    />
  ),
  "toast:severity": (
    <div className="flex w-full flex-col items-center gap-4">
      <Toast title="Success Banner" severity="success" />
      <Toast title="Success Banner" severity="warning" />
      <Toast title="Success Banner" severity="info" />
      <Toast title="Success Banner" severity="error" />
    </div>
  ),
  "toast:visible": <Toast title="Success Banner" visible severity="info" />,
  "toast:title": <Toast title="This is sample" severity="warning" />,
};
