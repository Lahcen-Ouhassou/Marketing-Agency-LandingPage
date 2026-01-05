function FAQ() {
  return (
    <div className="min-h-screen flex justify-center items-start pt-20">
      <div className="space-y-3 w-5xl">
        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900  hover:bg-indigo-400 hover:text-white">
            <span class="font-semibold  ">What are the basic features?</span>

            <svg
              hover:text-white
              class="size-5 shrink-0 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>

          <div class="p-4 text-white">
            <p class="text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              similique, quae hic dicta quo facere facilis praesentium a sunt,
              est quia pariatur nam, modi aut minus iste odio consectetur
              molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900  hover:bg-indigo-400 hover:text-white">
            <span class="font-semibold">How do I get started?</span>

            <svg
              class="size-5 shrink-0 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>

          <div class="p-4 text-white ">
            <p class="text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              similique, quae hic dicta quo facere facilis praesentium a sunt,
              est quia pariatur nam, modi aut minus iste odio consectetur
              molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900  hover:bg-indigo-400 hover:text-white">
            <span class="font-semibold">
              What support options are available?
            </span>

            <svg
              class="size-5 shrink-0 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>

          <div class="p-4 text-white">
            <p class="text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              similique, quae hic dicta quo facere facilis praesentium a sunt,
              est quia pariatur nam, modi aut minus iste odio consectetur
              molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}

export default FAQ;
