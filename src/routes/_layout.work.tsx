import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/work")({
  component: () => <Outlet />,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display-md mb-4">Work page not found</h1>
      <p className="mb-8 text-muted-foreground">
        That work page doesn't exist or has been moved.
      </p>
      <Link
        to="/work"
        className="inline-block rounded-full bg-primary px-6 py-3 text-primary-foreground"
      >
        ← Back to all work
      </Link>
    </div>
  ),
});
