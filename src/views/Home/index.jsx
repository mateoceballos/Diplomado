import React from "react";
import img1 from "../../assets/images/Views/index/img1.jpg";
import img2 from "../../assets/images/Views/index/vacation.jpg";
import img3 from "../../assets/images/Views/index/Carrusel1.jpg";
import img4 from "../../assets/images/Views/index/Carrusel2.jpg";
import img5 from "../../assets/images/Views/index/Carrusel3.jpg";
import parraf1 from "../../assets/texts";
export default function Index() {
  const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
  return (
    <>
      <section className="SectionIndex sectionOrderImage">
        <div className="contentImage order1">
          <div className="contentImageDiv">
            <img src={img1} alt="" />
            <div
              class="imagenSuperpuesta"
              style={{ backgroundImage: `url(${img1})` }}
            />
          </div>
        </div>
        <div className="contentText order2">
          <p className="titleSection">Acerca de nosotros</p>
          <p className="descSection">{parraf1.text1}</p>
        </div>
      </section>
      <section className="SectionIndex sectionOrderText">
        <div className="contentImage order2">
          <div className="contentImageDiv">
            <img src={img2} alt="" />
            <div
              class="imagenSuperpuesta"
              style={{ backgroundImage: `url(${img2})` }}
            />
          </div>
        </div>
        <div className="contentText order1">
          <p className="titleSection">Nuestros planes economicos</p>
          <p className="descSection">{parraf1.text1}</p>
        </div>
      </section>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img5} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
    
  );
}
