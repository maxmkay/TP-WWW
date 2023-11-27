const MediaPlayer = () => {
  return (
    <section className="bg-yellow-500 py-5">
      <div className="container px-5">
        <div className="lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-3/4 xl:w-2/3 pt-3 pb-md-5 pb-5">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/FF3fuYLnApQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPlayer;
