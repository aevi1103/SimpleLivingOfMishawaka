import React from 'react';
import Gallery from 'react-grid-gallery'

import{
    Container,
    Row,
    Col
  } from "reactstrap";

const IMAGES = [
  {
    src: "https://dlyhjlf6lts50.cloudfront.net/app/uploads/2019/02/AssistedLivingGathering1-1.png",
    thumbnail:"https://dlyhjlf6lts50.cloudfront.net/app/uploads/2019/02/AssistedLivingGathering1-1.png",
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: "https://www.larksfieldplace.org/media/gallery/11/larksfield-place-assisted-living-memory-support-4.jpg",
    thumbnail:"https://www.larksfieldplace.org/media/gallery/11/larksfield-place-assisted-living-memory-support-4.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://www.brandycare.com/wp-content/uploads/2014/02/24C1059.jpg",
    thumbnail:"https://www.brandycare.com/wp-content/uploads/2014/02/24C1059.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-iool83as-ridgeline-management-company-client/g5-cl-57bl47p31-wood-ridge-assisted-living/uploads/hero-12-v2.jpg",
    thumbnail:"https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-iool83as-ridgeline-management-company-client/g5-cl-57bl47p31-wood-ridge-assisted-living/uploads/hero-12-v2.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://www.retirementliving.com/wp-content/uploads/2018/09/What-does-assisted-living-cost-1.jpg",
    thumbnail:"https://www.retirementliving.com/wp-content/uploads/2018/09/What-does-assisted-living-cost-1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://wingatehealthcare.com/wp-content/uploads/2018/01/haverhill_livingroom.jpg",
    thumbnail:"https://wingatehealthcare.com/wp-content/uploads/2018/01/haverhill_livingroom.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://www.meridiansenior.com/wp-content/uploads/2018/07/Demaree_Crossing_IMG_5182-2.png",
    thumbnail:"https://www.meridiansenior.com/wp-content/uploads/2018/07/Demaree_Crossing_IMG_5182-2.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
];

const ImageGallery = () => {
    return (
      <div className="section section-gallery" id="gallerysection">
        <Container>
          <Row>
            <Col className='text-center'>
                <h2 className="title">Our Gallery</h2>
                <Gallery images={IMAGES} onClick={() => true} />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ImageGallery
