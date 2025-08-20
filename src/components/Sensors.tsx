import SensorImage from "./SensorImage";

const Sensors = () => {
  return (
    <section id="sensors" className="py-8 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-8">Sensores</h2>

        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6 text-primary italic text-xl">Senna_1</h3>

          <SensorImage />
        </div>
      </div>
    </section>
  );
};

export default Sensors;