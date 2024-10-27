"use client";

import { X } from 'lucide-react';
import Link from 'next/link';

const SearchFormReset = () => {
  // Function to handle form reset
  const reset = () => {
    // Select the form element with class "search-form"
    const frm = document.querySelector(".search-form") as HTMLFormElement;
    
    if (frm) frm.reset();
  };

  return (
    <button type="reset" className="" onClick={reset}>
			<Link href={'/'} className='search-btn text-white'>
				<X className="w-4 h-4" />
			</Link>
		</button>
  );
};

export default SearchFormReset;
