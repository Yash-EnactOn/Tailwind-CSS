export default function Home() {
  return (
    <div>
      {/* <h1 className="text-3xl bg-green-600 text-white">Hello world!</h1>
        <h2 className="text-3xl text-yellow-600">Hello world</h2>
        <p className="border-4 border-red-600">Lorem ipsum dolor sit amet.</p>
        <p className="text-vuejs-932 text-2xl">vuejs color</p>
        <p className="text-xs sm:text-base md:text-lg lg:text-3xl">
          Tailwind CSS
        </p>
        <div>
          <p className="mb-6">Tailwind CSS 1</p>
          <p className="bg-[#bada55]">Tailwind CSS 2</p>
        </div>
        <div className="mt-16 py-4">
          <h1 className="text-3xl ">Title 1</h1>
          <h2 className="text-2xl">Title 2</h2>
          <h3 className="text-xl">Title 3</h3>
          <p className="text-base underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4 leading-loose capitalize">a regular paragraph</p>
          <p className="text-sm uppercase">A Description paragraph</p>
          <p className="text-xs italic note">A little note</p>
        </div> */}

      {/* <div style={{ width: 300, height: 300 }} className="bg-gray-600">
          <p className="truncate">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus, rerum corrupti, impedit velit incidunt perferendis
            laboriosam ratione voluptas porro neque distinctio asperiores fuga.
          </p>
        </div> */}

      {/* <div className="whitespace-nowrap">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus, rerum corrupti, impedit velit incidunt perferendis
            laboriosam ratione voluptas porro neque distinctio asperiores fuga. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis doloremque eum placeat odio quaerat quam, tempore reprehenderit, temporibus quisquam laboriosam minus accusantium fugit repellat consectetur veniam tenetur beatae exercitationem amet?
          </p>
        </div> */}

      {/* <div>
        <div className="m-4 p-4 font-bold text-white bg-red-500">
          Hello world!
        </div>
        <div className="-mt-6">Hello</div>
      </div> */}

      {/* <div>
        <div className="w-16 h-16 bg-red-500">Sidebar</div>
        <div className="w-16 h-16 bg-green-500">Main content</div>
      </div> */}

      {/* <div className="flex min-h-screen space-x-3">
        <div className="w-1/5 bg-red-500">Sidebar</div>
        <div className="w-4/5 bg-green-500">Main content</div>
      </div> */}

      {/* <div className="parent">
        <div>Header</div>
        <div className="flex flex-row">
          <div className="bg-red-500 grow">Main content</div>
          <div className="flex flex-col">
            <div className="bg-green-500">Sidebar</div>
            <div className="bg-green-500">Menu</div>
          </div>
        </div>
      </div> */}

      {/* <div className="parent">
        <div>Header</div>
        <div className="flex">
          <div className="basis-1/4 bg-slate-400">Sidebar</div>
          <div className="basis-2/4 bg-slate-500">Main content</div>
          <div className="basis-1/4 bg-slate-400">Another Sidebar</div>
        </div>
      </div> */}

      {/* <div className="parent">
        <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-32 bg-slate-400">Sidebar</div>
          <div className="w-full bg-slate-500">Main content</div>
        </div>
      </div> */}

      {/* <div className="parent">
        <div>Header</div>
        <div className="flex flex-col md:flex-row">
           <div className="flex w-full flex-wrap">
             <div className="w-32 grow">01</div>
             <div className="w-32 grow">02</div>
             <div className="w-32 grow">03</div>
             <div className="w-32 grow">04</div>
             <div className="w-32 grow">05</div>
           </div>
        </div>
      </div> */}

      {/* <div className="parent">
        <div>Header</div>
        <div className="flex items-center justify-evenly">
          <div>Sidebar</div>
          <div>
            <h1 className="text-2xl font-bold">Main content</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos voluptates ad vitae enim repellat nostrum, laudantium perferendis!</p>
          </div>
          <div>Another Sidebar</div>
        </div>
      </div> */}

      <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-lg bg-sky-500 col-start-2">First Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Second Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Third Element</div>
            <div className="p-6 rounded-lg bg-red-500 col-span-2">Fourth Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Fifth Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Sixth Element</div>
          </div>
        </div>
      </div>


    </div>
  );
}
