import React from "react";
import Header from "./Header";
import Image from "next/image";
import Top from "./../../../public/Top.jpeg";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <Header title="About Us" />
      <div className="w-full h-full bg-white shadow-md rounded-xl">
        <Image
          className="h-48 w-full object-cover"
          src={Top}
          alt="Your Company"
        />
        <div className="">
          <div className="m-10 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum id
            ex sit laboriosam dolores consectetur quia inventore minima dolorem
            quasi corrupti repellendus vel ducimus, facilis impedit officiis
            reprehenderit exercitationem recusandae? Blanditiis omnis maiores
            corrupti rerum earum quaerat fugiat nam dolorem! Eligendi a quasi
            deserunt qui nulla pariatur, sunt sed minus.
          </div>
          <div className="mx-8">
            <Image
              className="h-96 items-center object-cover rounded-lg"
              src={Top}
              alt="Your Company"
            />
          </div>

          <div className="m-10 text-justify">
            pedita vel sapiente voluptatum mollitia asperiores inventore! Cum ad
            assumenda fugiat dignissimos quod commodi placeat impedit quos
            numquam alias animi minima officiis, harum illum quaerat
            voluptatibus perspiciatis, quo, repellat ullam sequi mollitia!
            Quaerat nobis error veniam?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem possimus nobis porro nostrum quaerat ullam necessitatibus repudiandae? Accusamus minima, cum repellat, ipsa adipisci ea eum ullam mollitia officiis neque et similique molestias beatae deleniti aspernatur nihil nam nobis delectus itaque modi pariatur ex esse ratione. Itaque expedita quia et voluptate laboriosam excepturi repellat harum ab mollitia cupiditate nam, non quo consectetur rem aliquam, labore eligendi deleniti consequatur dolorum earum veniam. Laboriosam, reprehenderit aut pariatur eligendi neque saepe iste fuga tempora nostrum modi minima quam reiciendis fugit illum magni tenetur eos asperiores autem quod enim. Explicabo, deleniti sapiente! Magni fugiat doloribus, illum eveniet possimus repellendus reiciendis laudantium quibusdam accusantium nulla enim? Quas minima sint maiores recusandae aperiam labore temporibus quo, ut enim reprehenderit deleniti explicabo voluptate optio cumque voluptatum distinctio! Repudiandae placeat pariatur a accusantium saepe nisi est consequatur praesentium cumque corrupti laborum dolorum explicabo fugiat quibusdam natus aspernatur, id illo minus qui ea, molestiae odio culpa perspiciatis! Nam necessitatibus dolorem aspernatur architecto alias iure voluptate dicta dolorum eos accusamus facilis molestiae maiores, ea commodi deserunt! Facilis, culpa aut, repudiandae quo ducimus ab aliquam quidem, architecto totam veritatis iusto rerum quisquam eos doloremque nihil at ex ipsa id deserunt ut harum cum minima impedit. Aperiam eius iusto voluptatibus quo eum non, iure animi provident, eos at voluptas debitis harum odit deserunt ad, soluta cupiditate fugit consequatur in similique. Dolores error non quod necessitatibus, quisquam, voluptatum numquam sed facere, consectetur veniam dolor est consequatur! Ea temporibus quos voluptate voluptas architecto reprehenderit magnam iure nam rerum molestias asperiores veniam placeat, odio adipisci at amet! Libero facere voluptatem numquam similique velit quam dolorum ipsum placeat, nulla magni a! Tempora aperiam velit natus animi quam, itaque ipsum culpa dolorem labore fugiat quasi, nostrum cupiditate esse minima tenetur reprehenderit maiores praesentium delectus pariatur ullam atque deserunt temporibus. Earum a aliquam consequatur, laboriosam repudiandae magnam doloremque voluptate, qui, ratione ipsam architecto nulla? Laudantium laborum officiis nesciunt minus minima, cum vitae nobis ipsam dicta quae laboriosam a cumque at quam debitis rem deserunt excepturi optio blanditiis rerum tenetur aliquid! Minima animi at quisquam. Temporibus, ducimus placeat? Molestias aspernatur distinctio laudantium quidem nulla maxime dolorem debitis, dolorum eveniet a optio voluptatum delectus, autem nostrum quos magnam rerum alias sequi, eius cum pariatur. Odit aliquid libero vel repudiandae. Eius enim repudiandae praesentium, labore doloribus quo nobis dignissimos voluptate doloremque, ea quibusdam dolorem nihil ad placeat sequi ullam eum rem, odit sunt? Nemo culpa voluptatum esse dicta quasi consectetur dolorum cumque voluptate doloremque harum soluta voluptatibus dolores modi, architecto tempore totam porro officia mollitia adipisci natus voluptatem hic iusto odit eum. Perferendis vero tempora maxime rerum sapiente nemo voluptates odit iste, delectus, cum repellendus quis, deleniti autem numquam obcaecati. Ad ipsum natus, eligendi odio saepe, eos ab excepturi fuga doloribus eveniet voluptates! Expedita, debitis, recusandae eveniet animi vero dignissimos, odio distinctio ut eligendi praesentium cum molestiae voluptatem maiores culpa fugit sit necessitatibus! In deserunt dolorum culpa, suscipit ea quae. Aut praesentium quod modi, consequuntur atque temporibus rem necessitatibus excepturi pariatur officia.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
