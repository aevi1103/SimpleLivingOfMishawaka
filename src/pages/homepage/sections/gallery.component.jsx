import React from 'react';
// import Gallery from 'react-grid-gallery'

import Gallery from 'react-image-gallery';
import '../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss'

import{
    Container,
    Row,
    Col
  } from "reactstrap";

const IMAGES = [
  {
    original: "https://dlyhjlf6lts50.cloudfront.net/app/uploads/2019/02/AssistedLivingGathering1-1.png",
    thumbnail:"https://dlyhjlf6lts50.cloudfront.net/app/uploads/2019/02/AssistedLivingGathering1-1.png"
  },
  {
    original: "https://www.larksfieldplace.org/media/gallery/11/larksfield-place-assisted-living-memory-support-4.jpg",
    thumbnail:"https://www.larksfieldplace.org/media/gallery/11/larksfield-place-assisted-living-memory-support-4.jpg"
  },
  {
    original: "https://www.brandycare.com/wp-content/uploads/2014/02/24C1059.jpg",
    thumbnail:"https://www.brandycare.com/wp-content/uploads/2014/02/24C1059.jpg"
  },
  {
    original: "https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-iool83as-ridgeline-management-company-client/g5-cl-57bl47p31-wood-ridge-assisted-living/uploads/hero-12-v2.jpg",
    thumbnail:"https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-iool83as-ridgeline-management-company-client/g5-cl-57bl47p31-wood-ridge-assisted-living/uploads/hero-12-v2.jpg"
  },
  {
    original: "https://www.retirementliving.com/wp-content/uploads/2018/09/What-does-assisted-living-cost-1.jpg",
    thumbnail:"https://www.retirementliving.com/wp-content/uploads/2018/09/What-does-assisted-living-cost-1.jpg"
  },
  {
    original: "https://wingatehealthcare.com/wp-content/uploads/2018/01/haverhill_livingroom.jpg",
    thumbnail:"https://wingatehealthcare.com/wp-content/uploads/2018/01/haverhill_livingroom.jpg"
  },
  {
    original: "https://www.meridiansenior.com/wp-content/uploads/2018/07/Demaree_Crossing_IMG_5182-2.png",
    thumbnail:"https://www.meridiansenior.com/wp-content/uploads/2018/07/Demaree_Crossing_IMG_5182-2.png"
  }
];

const ImageGallery = () => {
    return (
      <div className="section section-gallery" id="gallerysection">
        <Container>
          <Row>
            <Col className='text-center'>
                <h2 className="title">Our Gallery</h2>
                {/* <Gallery images={IMAGES} onClick={() => true} /> */}
                <Gallery items={IMAGES} />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ImageGallery
