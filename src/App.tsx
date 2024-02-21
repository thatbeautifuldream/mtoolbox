import EmptyState from "./components/EmptyState";

function App() {
  return (
    <main className="bg-[rgb(45,45,45)] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold underline">this is my toolbox</h1>
          <EmptyState />
        </div>
      </div>
    </main>
  );
}

export default App;
