const SensorImage = () => {
  return (
    <div className="text-center">
      <div className="bg-background rounded-lg p-3 shadow-lg inline-block">
        <img
          src="/lovable-uploads/9d26d6c1-2b4d-4b9d-bcb5-b4ea43945348.png"
          alt="Senna_1"
          className="w-full max-w-xs mx-auto rounded-lg"
        />
      </div>
      <p className="mt-4 text-muted-foreground">
        Sensor de alta precisão para monitoramento estrutural avançado
      </p>
      
      <div className="mt-8">
        <img
          src="/lovable-uploads/c11fb548-4954-4a0f-a0bc-c3eb4e54166d.png"
          alt="Sensor Device"
          className="w-full max-w-xs mx-auto"
        />
      </div>
    </div>
  );
};

export default SensorImage;