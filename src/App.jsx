import "./index.css";
import { useState } from "react";

function App() {

  const [isOpenDrwaer, setIsOpenDrwaer] = useState(false);


  return (
    <div>
      <section className="w-full h-screen backGround ">
        <nav className="flex items-center justify-between py-[2%] px-[6%]">
          <a href="">
            <img className="w-[150px]" src="public/logo.png" alt="" />
          </a>
          <i onClick={()=>setIsOpenDrwaer(true)} className="fa fa-bars hidden max-sm:block text-white m-[10px] text-[22px] cursor-pointer"></i>

          <div className={`drwaer flex-1 text-right max-sm:absolute max-sm:bg-[#f44336] max-sm:h-screen max-sm:w-[200px] max-sm:top-0 max-sm:text-left max-sm:z-[2] max-sm:duration-[1s]  ${isOpenDrwaer ? 'max-sm:right-[0px] max-sm:visible max-sm:opacity-[1]' : 'max-sm:right-[-200px] max-sm:hidden max-sm:opacity-[0]'}`}>

          <i onClick={()=>setIsOpenDrwaer(false)} className="fa fa-times hidden max-sm:block text-white m-[10px] text-[22px] cursor-pointer"></i>

            <ul className="w-full flex-1 text-right max-sm:p-[30px]">
              <li className="py-[8px] px-[12px] list-none inline-block relative cursor-pointer max-sm:block max-sm:text-left">
                <a
                  className="text-white uppercase text-[14px] no-underline"
                  href=""
                >
                  Home
                </a>
              </li>
              <li className="py-[8px] px-[12px] list-none inline-block relative cursor-pointer max-sm:block max-sm:text-left">
                <a
                  className="text-white uppercase text-[14px] no-underline"
                  href=""
                >
                  About
                </a>
              </li>
              <li className="py-[8px] px-[12px] list-none inline-block relative cursor-pointer max-sm:block max-sm:text-left">
                <a
                  className="text-white uppercase text-[14px] no-underline"
                  href=""
                >
                  Course
                </a>
              </li>
              <li className="py-[8px] px-[12px] list-none inline-block relative cursor-pointer max-sm:block max-sm:text-left">
                <a
                  className="text-white uppercase text-[14px] no-underline"
                  href=""
                >
                  Blog
                </a>
              </li>
              <li className="py-[8px] px-[12px] list-none inline-block relative cursor-pointer max-sm:block max-sm:text-left">
                <a
                  className="text-white uppercase text-[14px] no-underline"
                  href=""
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="w-[90%] h-max text-white absolute top-0 left-0 right-0 bottom-0 m-auto text-center">
          <h1 className="text-[62px] text-white font-bold max-sm:text-[20px]">
            World's Biggest University
          </h1>
          <p className="my-[10px] mb-[40px] text-[14px] text-white leading-tight-[22px] p-[10px]">
            Making website is now one of the easiest thing in the World. You
            jusst need tho learn HTML, CSS, <br /> Javascript and you are good
            to go.
          </p>
          <a
            href=""
            className="inline-block text-white border border-solid border-white py-[12px] px-[34px] text-[13px] bg-transparent relative cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] hover:duration-[1s]"
          >
            Visit Us To Know More
          </a>
        </div>
      </section>

      {/* Course  */}
      <section className="w-[80%] m-auto text-center pt-[100px]">
        <h1 className="text-[36px] font-bold">Courses We Offer</h1>
        <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-[5%] flex justify-between max-sm:flex-col">
          <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-[20px] px-[12px] box-border duration-[0.5s] hover:shadow-2xl">
            <h3 className="text-center font-semibold my-[10px]">
              Intermediate
            </h3>
            <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              est ipsa in similique molestiae quod, maxime voluptate omnis quas,
              enim totam magnam pariatur temporibus illum cumque. Cum ut non ex?
            </p>
          </div>

          <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-[20px] px-[12px] box-border duration-[0.5s] hover:shadow-2xl">
            <h3 className="text-center font-semibold my-[10px]">Degree</h3>
            <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              est ipsa in similique molestiae quod, maxime voluptate omnis quas,
              enim totam magnam pariatur temporibus illum cumque. Cum ut non ex?
            </p>
          </div>

          <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-[20px] px-[12px] box-border duration-[0.5s] hover:shadow-2xl">
            <h3 className="text-center font-semibold my-[10px]">
              Post Graduation
            </h3>
            <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              est ipsa in similique molestiae quod, maxime voluptate omnis quas,
              enim totam magnam pariatur temporibus illum cumque. Cum ut non ex?
            </p>
          </div>
        </div>
      </section>

      {/* campus  */}
      <section className="w-[80%] m-auto text-center pt-[50px]">
        <h1 className="text-[36px] font-bold">Our Global Campus</h1>
        <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-[5%] flex justify-between max-sm:flex-col">
          <div className="basis-[32%] rounded-[10px] mb-[30px] relative overflow-hidden">
            <img
              className="w-full h-full block"
              src="public/london.png"
              alt=""
            />
            <div className="bg-transparent w-full h-full absolute top-0 left-0 duration-[0.5s] hover:bg-[#e20000b3] cursor-pointer group">
              <h3 className="w-full font-medium text-[#fff] text-[26px] bottom-0 left-0 absolute opacity-0 duration-[0.5s] group-hover:bottom-[49%] group-hover:opacity-[1]">
                LONDON
              </h3>
            </div>
          </div>

          <div className="basis-[32%] rounded-[10px] mb-[30px] relative overflow-hidden">
            <img
              className="w-full h-full block"
              src="public/newyork.png"
              alt=""
            />
            <div className="bg-transparent w-full h-full absolute top-0 left-0 duration-[0.5s] hover:bg-[#e20000b3] cursor-pointer group">
              <h3 className="w-full font-medium text-[#fff] text-[26px] bottom-0 left-0 absolute opacity-0 duration-[0.5s] group-hover:bottom-[49%] group-hover:opacity-[1]">
                NEW YORK
              </h3>
            </div>
          </div>

          <div className="basis-[32%] rounded-[10px] mb-[30px] relative overflow-hidden">
            <img
              className="w-full h-full block"
              src="public/washington.png"
              alt=""
            />
            <div className="bg-transparent w-full h-full absolute top-0 left-0 duration-[0.5s] hover:bg-[#e20000b3] cursor-pointer group">
              <h3 className="w-full font-medium text-[#fff] text-[26px] bottom-0 left-0 absolute opacity-0 duration-[0.5s] group-hover:bottom-[49%] group-hover:opacity-[1]">
                WASHINGTON
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities  */}
      <section className="w-[80%] m-auto text-center pt-[100px]">
        <h1 className="text-[36px] font-bold">Our Facilities</h1>
        <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-[5%] flex justify-between max-sm:flex-col">
          <div className="basis-[31%] rounded-[10px] mb-[5px] text-left">
            <img
              className="w-full rounded-[10px]"
              src="public/library.png"
              alt=""
            />
            <h3 className="text-center font-semibold my-[10px]">
              World Class Library
            </h3>
            <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
              iste. Accusantium soluta autem!
            </p>
          </div>

          <div className="basis-[31%] rounded-[10px] mb-[5px] text-left">
            <img
              className="w-full rounded-[10px]"
              src="public/basketball.png"
              alt=""
            />
            <h3 className="text-center font-semibold my-[10px]">
              Largest Play Ground
            </h3>
            <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
              iste. Accusantium soluta autem!
            </p>
          </div>

          <div className="basis-[31%] rounded-[10px] mb-[5px] text-left">
            <img
              className="w-full rounded-[10px]"
              src="public/cafeteria.png"
              alt=""
            />
            <h3 className="text-center font-semibold my-[10px]">
              Tasty and Healthy Food
            </h3>
            <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
              iste. Accusantium soluta autem!
            </p>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="w-[80%] m-auto text-center pt-[100px]">
        <h1 className="text-[36px] font-bold">Our Testimonials</h1>
        <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-[5%] flex justify-between">
          <div className="basis-[44%] rounded-[10px] mb-[5%] text-left bg-[#fff3f3] p-[25px] cursor-pointer flex">
            <img
              className="h-[40px] ml-[5px] mr-[3px] rounded-[50%]"
              src="public/user1.jpg"
              alt=""
            />
            <div>
              <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus numquam at quae optio ea porro cum suscipit quod.
                Repellendus quisquam provident impedit, sit eligendi minima.
              </p>
              <h3 className="mt-[15px] text-lefl font-semibold my-[10px]">
                Christine Berkley
              </h3>
              <i className="fa fa-star text-[#f44336]"></i>
              <i className="fa fa-star text-[#f44336]"></i>
              <i className="fa fa-star text-[#f44336]"></i>
              <i className="fa fa-star text-[#f44336]"></i>
              <i className="fa fa-star-half-o text-[#f44336]"></i>
            </div>
          </div>

          <div className="basis-[44%] rounded-[10px] mb-[5%] text-left bg-[#fff3f3] p-[25px] cursor-pointer flex">
            <img
              className="h-[40px] ml-[5px] mr-[3px] rounded-[50%]"
              src="public/user2.jpg"
              alt=""
            />
            <div>
              <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus numquam at quae optio ea porro cum suscipit quod.
                Repellendus quisquam provident impedit, sit eligendi minima.
              </p>
              <h3 className="mt-[15px] text-lefl font-semibold my-[10px]">
                David Byer
              </h3>
              <i className="fa fa-star text-[#f44336]"></i>
              <i className="fa fa-star text-[#f44336]"></i>
              <i className="fa fa-star text-[#f44336]"></i>
              <i className="fa fa-star text-[#f44336]"></i>
              <i className="fa fa-star-half-o text-[#f44336]"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="my-[100px] mx-auto w-[80%] rounded-[10px] text-center py-[100px] bottomBgImg">
        <h1 className="text-[#fff] mb-[40px] p-0 text-[36px] font-bold">
          Enroll For Our Various Online Courses <br /> Anywhere From The World{" "}
        </h1>
        <a
          href=""
          className="inline-block text-[#fff] border border-solid border-[#fff] py-[12px] px-[34px] bg-transparent relative cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] hover:duration-[1s]"
        >
          CONTACT US
        </a>
      </section>

      {/* footer  */}
      <footer className="w-full text-center py-[30px]">
        <h4 className="mb-[25px] mt-[20px] font-semibold">About us</h4>
        <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          amet voluptates autem exercitationem enim sunt <br />
          doloribus quis delectus dignissimos temporibus tempora!
        </p>

        <div>
          <i className="fa fa-facebook text-[#f44336] mx-[13px] cursor-pointer py-[18px]"></i>
          <i className="fa fa-twitter text-[#f44336] mx-[13px] cursor-pointer py-[18px]"></i>
          <i className="fa fa-instagram text-[#f44336] mx-[13px] cursor-pointer py-[18px]"></i>
          <i className="fa fa-linkedin text-[#f44336] mx-[13px] cursor-pointer py-[18px]"></i>
        </div>

        <p className="text-[#777] text-[14px] leading-[22px] p-[10px]">
          Made by <i className="fa fa-heart-o text-[#f44336]"></i> Sahil Developer{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
