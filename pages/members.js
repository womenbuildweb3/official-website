import MemberCard from "../components/memberCard";
import { Members } from "../components/membersData";

const Member = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Team
            </h2>
            <p className="text-xl text-gray-500">
              We are a community of women and non-binary developers in web3.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {Members.map((member, index) => (
              <MemberCard
                key={index}
                image={member.image}
                name={member.name}
                description={member.description}
                twitterHandle={member.twitterHandle}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Member;
