const resources = [
  {
    category: "Dokus",
    items: [
      {
        name: "Dominion",
        url: "https://watchdominion.org/",
      },
      {
        name: "Earthlings",
        url: "https://www.nationearth.com/",
      },
      {
        name: "Land of Hope and Glory",
        url: "https://youtu.be/dvtVkNofcq8?si=GDJmjvJZh2wEhscL",
      },
      {
        name: "Pelzfarm",
        url: "https://youtu.be/6jrvxesnO3w?si=mBwxnVOe5oWswpiD",
      },
      {
        name: "Milchindustrie",
        url: "https://youtu.be/B_pHcBfb0Go?si=LoOFslyGUtyYGKGS",
      },
      {
        name: "Eierindustrie",
        url: "https://youtu.be/4i1YbzfYwk0?si=J9TdBVfM5-V_0LAy",
      },
      {
        name: "Ferkelzucht",
        url: "https://youtu.be/L4XFCuFbiOY?si=skbI22TAdUSbMS1o",
      },
    ],
  },
  {
    category: "YouTube Kanäle",
    items: [
      {
        name: "Robert Marc Lehmann",
        url: "https://www.youtube.com/@MissionErde",
      },
      {
        name: "SOKO Tierschutz",
        url: "https://www.youtube.com/@SOKOTIERSCHUTZ",
      },
      {
        name: "Team Tierschutz",
        url: "https://www.youtube.com/@TT_TeamTierschutz",
      },
      {
        name: "Ed Winters",
        url: "https://www.youtube.com/@ed.winters",
      },
      {
        name: "Tierethik und Veganismus",
        url: "https://youtube.com/@tierethikundveganismus?si=ycGbF0ps_u1pJVAl",
      },
    ],
  },
  {
    category: "Organisationen",
    items: [
      {
        name: "PETA",
        url: "https://www.peta.org/",
      },
      {
        name: "Animal Rights Switzerland",
        url: "https://animal-rights-switzerland.ch/",
      },
      {
        name: "The Vegan Society",
        url: "https://vegansociety.com/",
      },
      {
        name: "Sea Shepherd",
        url: "https://seashepherd.org/",
      },
    ],
  },
  {
    category: "wissenschaftliche Literatur",
    items: [
      {
        name: "",
        url: "",
      },
    ],
  },
  {
    category: "Weiteres",
    items: [
      {
        name: "Kinder World",
        url: "https://www.kinderworld.org/",
      },
    ],
  },
];

function Homepage() {
  return (
    <>
      <main className="grow flex flex-col justify-center items-center">
        <div>
          <h1 className="text-primary text-6xl font-bold text-center my-8">
            Animal Rights Resources
          </h1>
        </div>

        <div className="grow flex flex-col justify-center items-center gap-8 w-10/12 mb-8 max-w-280">
          {resources.map((category) => (
            <div
              key={category.category}
              className="bg-primary rounded-xl p-2 w-full text-white"
            >
              <h2 className="text-4xl font-bold text-center p-0 my-6">
                {category.category}
              </h2>

              <div className="bg-white text-primary rounded-lg p-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="border-primary border-2 rounded-md text-center p-2 hover:bg-primary hover:text-white"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Homepage;
