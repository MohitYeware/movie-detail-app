import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
      </p>
    </div>
  );
}
