import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  const whyUs = [
    {
      title: "Best Prices",
      img: "https://s3n.cashify.in/estore/99953fd419e2416ba7dc25e0164372c3.png",
      description: "Objective AI-based pricing",
    },
    {
      title: "Instant Payment",
      img: "https://s3n.cashify.in/estore/acef68f939a84a8884640ae56f70867f.png",
      description:
        "Instant Money Transfer in your preferred mode at time of pick up or store drop off",
    },
    {
      title: "Simple & Convenient",
      img: "https://s3n.cashify.in/estore/7989ad6b9431414481a1e9dcda098d45.png",
      description: "Check price, schedule pickup & get paid ",
    },
    {
      title: "Free Doorstep Pickup",
      img: "https://s3n.cashify.in/estore/3c0a0e2e0f4945c09e941a10bcf66e83.png",
      description: "No fees for pickup across 1500 cities across Bangladesh",
    },
    {
      title: "Factory Grade Data Wipe",
      img: "https://s3n.cashify.in/estore/09bf461127cd48acb409f207e1664438.png",
      description: "100% Safe and Data Security Guaranteed",
    },
    {
      title: "Valid Purchase Invoice",
      img: "https://s3n.cashify.in/estore/4413e4f7e0e448f88a73bd4e6047e93d.png",
      description: "Genuine Bill of Sale",
    },
  ];
  return (
    <div className="bg-base-200">
      <h1 className="text-center font-bold text-4xl mt-24">Why Us</h1>
      <div className="mt-24 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols gap-4">
        {whyUs.map((data) => (
          <WhyUsCard key={data.title} data={data}></WhyUsCard>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
