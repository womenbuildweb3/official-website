const MemberCard = ({ name, image, description, twitterHandle }) => {
  console.log(image);
  console.log(twitterHandle);
  return (
    <li>
      <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="object-cover shadow-lg rounded-lg w-80 h-80"
            src={image.src}
            alt="member-image"
          />
        </div>

        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3>{name}</h3>
            <p className="text-indigo-600">{description}</p>
          </div>
          <ul role="list" className="flex space-x-5">
            <li>
              <a
                href={`https://twitter.com/${twitterHandle}`}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default MemberCard;
