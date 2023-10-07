import FeatureCard from "./FeatureCard";

const Feature = () => {
  const howToWork = [
    {
      id: 1,
      img: "https://s3n.cashify.in/estore/0cbe53723c3f453b9129991ca35df5f0.png",
      title: "Check Price",
      description:
        "Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.",
    },
    {
      id: 2,
      img: "https://s3n.cashify.in/estore/11c121e3650747689b22301209b725a4.png",
      title: "Schedule Pickup",
      description:
        "Book a free pickup from your home or work at a time slot that best suits your convenience.",
    },
    {
      id: 3,
      img: "https://s3n.cashify.in/estore/b9d74e87eedd4de3b47531e13a033fb2.png",
      title: "Get Paid",
      description:
        "Did we mention you get paid as soon as our executive picks up your device? It's instant payment all the way! ",
    },
  ];
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-24">
        How Resale Mobile Works
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols gap-4">
        {howToWork.map((feature) => (
          <FeatureCard key={feature.id} feature={feature}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Feature;
