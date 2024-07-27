import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/")({
  component: HomeScreen,
});

function HomeScreen() {
  return <div>Hello /!</div>;
}
