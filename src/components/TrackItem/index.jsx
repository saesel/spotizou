/* eslint-disable react/prop-types */
export function TrackItem({ id, album, name, artists, index, external_urls }) {
  return (
    <li
      key={id}
      className="m-auto flex w-full items-center gap-4 sm:mx-0 sm:w-[200px] sm:flex-col sm:items-start sm:justify-start sm:gap-0"
    >
      <div className="flex min-w-[64px] justify-center overflow-hidden rounded-lg shadow-md sm:flex sm:w-[200px]">
        <a
          href={external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            className="max-h-[64px] max-w-full cursor-pointer object-cover transition-all duration-200 ease-in-out hover:scale-110 sm:max-h-[200px]"
            src={album.images[0].url}
            alt={name}
            title={name}
          />
        </a>
      </div>
      <div className="flex w-full flex-col justify-start overflow-hidden sm:mt-2">
        <div className="mt-1 flex w-full items-center gap-2 sm:w-full">
          <p className="text-[0.9rem]">{index + 1}.</p>
          <a
            className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-[0.9rem] font-semibold hover:underline"
            title={name}
            href={external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </div>
        <a
          className="mt-1 text-xs text-gray-500 hover:underline dark:text-gray-400"
          href={artists[0].external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {artists[0].name}
        </a>
      </div>
    </li>
  );
}
