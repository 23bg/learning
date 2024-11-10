import CustomeFooter from "@/components/custome-footer";
import CustomeNav from "@/components/custome-nav";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";


export default function Home() {
  return (
    <>
      <div>
        <CustomeNav />
      </div>
      {/* Body start from here */}
      <section className="py-24 mb-24">
        <div className="w-full h-screen md:py-10 md:px-10 p-5 dark:bg-black bg-white">
          <div className="lg:mx-56 xl:mx-48 bg-zinc-50 dark:bg-zinc-800 border-2">
            {/* Body Header */}
            <div className="w-full text-center p-10">
              <p>Learn With Bugs And Glitches</p>
            </div>
            {/* Image Section */}
            <div className="w-full relative">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="https://i.pinimg.com/564x/28/fd/8d/28fd8d15e002feb2e320e613c7460c1b.jpg"
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
            {/* Dual Section */}
            <div className="w-full grid md:grid-cols-2 grid-cols-1">
              <div className="p-5 w-full h-full border">
                <p className="py-2 text-4xl font-semibold">Educator</p>
                <div className="w-full relative">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="https://i.pinimg.com/564x/28/fd/8d/28fd8d15e002feb2e320e613c7460c1b.jpg"
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
                <p className="py-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad recusandae sint eum totam impedit laborum sed, debitis minima, distinctio ex iure tempore et. Placeat tempora dolor ab cupiditate voluptate.</p>
              </div>
              <div className="p-5 w-full h-full border">
                <p className="py-2 text-4xl font-semibold">Learner</p>
                <div className="w-full relative">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="https://i.pinimg.com/564x/28/fd/8d/28fd8d15e002feb2e320e613c7460c1b.jpg"
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
                <p className="py-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad recusandae sint eum totam impedit laborum sed, debitis minima, distinctio ex iure tempore et. Placeat tempora dolor ab cupiditate voluptate.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    
      <div className="w-full h-full">
        <CustomeFooter />
      </div>
    </>
  );
}
