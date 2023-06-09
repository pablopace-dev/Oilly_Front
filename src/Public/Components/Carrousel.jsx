import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carousel.css';

export const Carrousel = () => {

  return (
    <section>
      <div className='relative mx-auto w-11/12 sm:w-full mb-8'>

        <p className='text-2xl font-semibold  mt-8 mb-4 m-auto text-center'>Aprende a usar nuestra Web</p>

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showIndicators
          centerMode={false}
          className="flex">


          <div className='w-full h-96  items-center justify-center'>
            <img src="../assets/Frame 34656.jpg" alt="Image 3" className="m-auto max-h-full" />
          </div>

          <div className='w-full h-96  items-center justify-center'>
            <img src="../assets/Frame 34683.png" alt="Image 2" className="m-auto max-h-full" />
          </div>

          <div className='w-full h-96  items-center justify-center'>
            <img src="../assets/Frame 34695.png" alt="Image 1" className="m-auto max-h-full" />
          </div>




        </Carousel>

      </div>
    </section>

  );
};


