import { PageHeader } from "@/components/app-shell";
import { NewProjectForm } from "./new-project-form";

export const metadata = { title: "New project" };

export default function NewProjectPage() {
  return (
    <>
      <PageHeader title="Create a project" description="Define milestones, amounts and deadlines. Funds stay in escrow until each milestone is verified by an independent panel." />
      <NewProjectForm />
    </>
  );
}
