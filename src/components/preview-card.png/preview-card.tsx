const PreviewCard = () => {
  return (
    <div className="w-full rounded-lg px-4 pt-4 bg-grid bg-repeat bg-center bg-cover relative">
      <h2 className="text-foreground-primary text-lg font-bold font-cal text-center pb-4">
        Prévisualisation
      </h2>
      <div className="flex justify-between items-center bg-black/15 absolute bottom-0 left-0 right-0 px-5 py-6 rounded-b-lg">
        <p className="text-foreground-primary text-sm">
          Taille : <span className="font-bold">1440x480</span>
        </p>
        <div>buttons</div>
      </div>
    </div>
  );
};

export default PreviewCard;
