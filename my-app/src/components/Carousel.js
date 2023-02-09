import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import '../App.css';


function CarouselHeader() {
  return (
    <Carousel variant="dark" className="carousel-header">
      <Carousel.Item>
        <Image src="https://github.com/catydiaz4863/my-site/blob/main/my-app/src/img/sample-1.jpeg?raw=true"/>

        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://github.com/catydiaz4863/my-site/blob/main/my-app/src/img/sample-2.jpeg?raw=true"/>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://github.com/catydiaz4863/my-site/blob/main/my-app/src/img/sample-3.jpeg?raw=true"/>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;