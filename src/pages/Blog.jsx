import React from "react";

const Blog = () => {
  const tableOfContents = [
    { id: 1, title: "Introduction", link: "#introduction" },
    { id: 2, title: "Getting Started", link: "#getting-started" },
    { id: 3, title: "Advanced Topics", link: "#advanced-topics" },
    { id: 4, title: "Conclusion", link: "#conclusion" },
  ];

  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="Blog header"
        className="w-full h-[400px] object-cover rounded"
      />

      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row gap-4 mt-16">
        {/* Table of Contents */}
        <div className="md:w-1/4">
          <div className="sticky top-20">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Blog Content */}
        <div className="md:w-3/4 prose max-w-none flex flex-col gap-10">
          <h1 className="text-4xl font-bold mb-6">
            The Ultimate Guide to Modern Blogging
          </h1>

          <section id="introduction">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section id="getting-started">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </section>

          <section id="advanced-topics">
            <h2 className="text-2xl font-semibold mb-4">Advanced Topics</h2>
            <p className="text-gray-600 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </section>

          <section id="conclusion">
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
