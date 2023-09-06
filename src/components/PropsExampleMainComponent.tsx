import { propsExampleData } from "../constants";
import { PropsExampleCard } from "../components";

const PropsExampleMainComponent = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {propsExampleData.map((data) => (
        <PropsExampleCard key={data.label} {...data} />
      ))}
    </section>
  );
};

export default PropsExampleMainComponent;
