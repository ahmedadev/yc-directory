import {Metadata} from "next/types";
import Navbar from "../../components/Navbar";

// Configure the Inter font with subsets

// Define metadata for the application
export const metadata: Metadata = {
  title: "", // Title of the page
  discription: "", // discription of the page
};

// Define the root layout for the application
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
