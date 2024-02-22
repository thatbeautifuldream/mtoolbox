import { PlusIcon } from "@heroicons/react/20/solid";

export default function EmptyState() {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-gray-300">No links</h3>
      <p className="mt-1 text-sm text-gray-200">
        Get started by adding a new link.
      </p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Link
        </button>
      </div>
    </div>
  );
}
