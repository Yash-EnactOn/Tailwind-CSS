"use client";
import { useState } from "react";
import { ArrowDown } from "./arrowDown";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Select an option");

  const updateValue = (value: string) => {
    setSelectValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      {/* <h1 className="text-3xl text-white bg-green-600">Hello world!</h1>
        <h2 className="text-3xl text-yellow-600">Hello world</h2>
        <p className="border-4 border-red-600">Lorem ipsum dolor sit amet.</p>
        <p className="text-2xl text-vuejs-932">vuejs color</p>
        <p className="text-xs sm:text-base md:text-lg lg:text-3xl">
          Tailwind CSS
        </p>
        <div>
          <p className="mb-6">Tailwind CSS 1</p>
          <p className="bg-[#bada55]">Tailwind CSS 2</p>
        </div>
        <div className="py-4 mt-16">
          <h1 className="text-3xl ">Title 1</h1>
          <h2 className="text-2xl">Title 2</h2>
          <h3 className="text-xl">Title 3</h3>
          <p className="text-base leading-loose underline capitalize decoration-red-500 decoration-wavy decoration-1 underline-offset-4">a regular paragraph</p>
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
        <div className="p-4 m-4 font-bold text-white bg-red-500">
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
           <div className="flex flex-wrap w-full">
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

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-start-2 p-6 rounded-lg bg-sky-500">First Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Second Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Third Element</div>
            <div className="col-span-2 p-6 bg-red-500 rounded-lg">Fourth Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Fifth Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Sixth Element</div>
          </div>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container mx-auto">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4 col-start-2 p-6 rounded-lg bg-sky-500">First Element</div>
            <div className="col-start-1 col-end-3 p-6 rounded-lg bg-sky-500">Second Element</div>
            <div className="col-span-2 col-end-7 p-6 rounded-lg bg-sky-500">Third Element</div>
            <div className="col-start-1 col-end-7 p-6 bg-red-500 rounded-lg">Fourth Element</div>
          </div>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container mx-auto">
          <div className="grid grid-flow-col grid-rows-6 gap-4">
            <div className="row-span-3 p-6 rounded-lg bg-sky-500">First Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Second Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Third Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Fourth Element</div>
            <div className="row-span-2 p-6 rounded-lg bg-sky-500">Fifth Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Sixth Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Seventh Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Eighth Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Ninth Element</div>
            <div className="row-start-3 p-6 rounded-lg bg-sky-500">Tenth Element</div>
            <div className="p-6 rounded-lg bg-sky-500">Eleventh Element</div>
            <div className="row-end-4 p-6 rounded-lg bg-sky-500">Twelfth Element</div>
          </div>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container mx-auto">
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
            <div className="col-span-2 p-6 rounded-lg bg-sky-500">01</div>
            <div className="col-span-2 p-6 rounded-lg bg-sky-500">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
            <div className="p-6 rounded-lg bg-sky-500">04</div>
            <div className="p-6 rounded-lg bg-sky-500">05</div>
            <div className="p-6 rounded-lg bg-sky-500">06</div>
            <div className="p-6 rounded-lg bg-sky-500">07</div>
            <div className="p-6 rounded-lg bg-sky-500">08</div>
            <div className="col-span-2 p-6 rounded-lg bg-sky-500">09</div>
            <div className="p-6 rounded-lg bg-sky-500">10</div>
            <div className="p-6 rounded-lg bg-sky-500">11</div>
            <div className="p-6 rounded-lg bg-sky-500">12</div>
          </div>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container px-2 bg-red-500">
          <h1 className="text-3xl">Hello</h1>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container px-2 columns-lg">
          <img src="https://images.pexels.com/photos/29985415/pexels-photo-29985415/free-photo-of-silhouetted-woman-walking-in-darkened-urban-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
          <p className="p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, dolorum exercitationem. Doloremque delectus ipsa eius voluptates harum excepturi nobis corporis id fugit, eaque dignissimos explicabo! Obcaecati repudiandae porro laborum eos accusamus dolore soluta quam.</p>
          <p className="p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, dolorum exercitationem. Doloremque delectus ipsa eius voluptates harum excepturi nobis corporis id fugit, eaque dignissimos explicabo! Obcaecati repudiandae porro laborum eos accusamus dolore soluta quam.</p>
          <p className="hidden p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, dolorum exercitationem. Doloremque delectus ipsa eius voluptates harum excepturi nobis corporis id fugit, eaque dignissimos explicabo! Obcaecati repudiandae porro laborum eos accusamus dolore soluta quam.</p>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container px-2">
          <img
          className="float-left w-64"
            src="https://images.pexels.com/photos/29985415/pexels-photo-29985415/free-photo-of-silhouetted-woman-walking-in-darkened-urban-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <img
          className="float-right w-32"
            src="https://images.pexels.com/photos/29985415/pexels-photo-29985415/free-photo-of-silhouetted-woman-walking-in-darkened-urban-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <p className="clear-right p-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            dolorum exercitationem. Doloremque delectus ipsa eius voluptates
            harum excepturi nobis corporis id fugit, eaque dignissimos
            explicabo! Obcaecati repudiandae porro laborum eos accusamus dolore
            soluta quam.
          </p>
          <p className="p-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            dolorum exercitationem. Doloremque delectus ipsa eius voluptates
            harum excepturi nobis corporis id fugit, eaque dignissimos
            explicabo! Obcaecati repudiandae porro laborum eos accusamus dolore
            soluta quam.
          </p>
          <p className="p-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            dolorum exercitationem. Doloremque delectus ipsa eius voluptates
            harum excepturi nobis corporis id fugit, eaque dignissimos
            explicabo! Obcaecati repudiandae porro laborum eos accusamus dolore
            soluta quam.
          </p>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container px-2">
          <div className="relative w-32 h-32 p-8 bg-red-500 rounded-lg">
            <div className="absolute top-0 left-0 w-24 h-24 p-8 bg-green-500 rounded-lg"></div>
            <div className="absolute w-24 h-24 p-8 bg-green-500 rounded-lg -top-2 -left-2"></div>
            <div className="absolute w-24 h-24 p-8 bg-green-500 rounded-lg inset-2"></div>
          </div>
        </div>
      </div> */}

      {/* <div className="text-white bg-slate-700 Parent">
        <div className="container p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500">01</div>
            <div className="invisible bg-green-500">02</div>
            <div className="bg-green-500">03</div>
          </div>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="container flex">
          <div className="z-40 p-3 -m-2 bg-red-500 border border-white rounded-full">01</div>
          <div className="z-30 p-3 -m-2 bg-red-500 border border-white rounded-full">02</div>
          <div className="z-20 p-3 -m-2 bg-red-500 border border-white rounded-full">03</div>
          <div className="z-10 p-3 -m-2 bg-red-500 border border-white rounded-full">04</div>
          <div className="z-0 p-3 -m-2 bg-red-500 border border-white rounded-full">05</div>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <header className="w-full py-4 border-t-8 border-b border-l-8">
          Header 👋
        </header>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <input type="text" className="m-5 text-2xl text-black border-2 rounded-md outline-none border-rose-500 ring-4"/>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-700 Parent">
        <div className="divide-y divide-red-600">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
      </div> */}

      {/* <div className="h-screen p-4 Parent">
        <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md shadow-cyan-500">
          <h1 className="text-2xl">Hello 👋</h1>
          <p className="mb-4">This is my div</p>
          <button className="px-3 py-2 rounded-lg shadow-md opacity-75 cursor-pointer bg-cyan-500 shadow-cyan-500/50">
            Say Hello
          </button>
        </div>
      </div> */}

      {/* <div className="h-screen p-4 Parent">
        <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md">
          <img
            src="https://images.unsplash.com/photo-1735437643865-18e22575a630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt="street"
            className="w-64 mb-4 rounded-lg blur-sm hover:blur-none saturate-150"
          />
          <h1 className="text-2xl">Hello 👋</h1>
          <p className="mb-4">This is my div</p>
          <button className="px-3 py-2 rounded-lg shadow-md cursor-pointer bg-cyan-500 shadow-cyan-500/50">
            Say Hello
          </button>
        </div>
      </div> */}

      {/* <div className="h-screen p-4 Parent">
        <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md shadow-cyan-500">
          <h1 className="text-2xl">Hello 👋</h1>
          <p className="mb-4">This is my div</p>
          <button className="px-3 py-2 m-2 text-white transition duration-1000 delay-1000 rounded-lg shadow-md cursor-pointer bg-cyan-500 shadow-cyan-500/50 hover:-translate-y-1">
            Say Hello 1
          </button>
          <button className="px-3 py-2 m-2 text-white transition duration-300 ease-in-out rounded-lg shadow-md cursor-pointer hover:scale-110 bg-cyan-500 shadow-cyan-500/50">
            Say Hello 2
          </button>
        </div>
      </div> */}

      <div>
        <h1 className="mb-2 text-3xl font-bold">This is title</h1>
        <h2 className="mb-1 text-xl font-semibold">this is subtitle</h2>
        <p className="text-base">this is paragraph</p>
        <a href="https://google.com">this is link</a>
        <div className="m-2">
          <button className="btn btn-primary">Primary Button</button>
        </div>
        <div className="m-2">
          <button className="btn btn-secondary">Secondary Button</button>
        </div>
        <div className="m-2">
          <button disabled className="btn btn-primary">
            Disabled Button
          </button>
        </div>
        <div>
          <input type="text" defaultValue="" placeholder="E-mail" />
        </div>
        <div>
          <input disabled type="text" defaultValue="" placeholder="E-mail" />
        </div>
        <div>
          <input type="date" />
        </div>
        <div className="flex">
          <input type="checkbox" id="checkbox" defaultChecked={false} />
          <label htmlFor="checkbox">
            Checkbox Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor consectetur maxime earum? Eaque reiciendis, eveniet quisquam
            tempora temporibus voluptates beatae maxime nisi saepe ad ipsum
            pariatur!
          </label>
        </div>
        <div>
          <select>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </div>

        <div className="Select">
          <div
            className="child flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectValue}</span>
            <div className={isOpen ? "rotate-180 transition" : "rotate-0 transition"}>
              <ArrowDown />
            </div>
          </div>
          {isOpen && (
            <div>
              <ul className="flex flex-col divide-y border-t">
                <li className="child" onClick={() => updateValue("Option 1")}>
                  Option 1
                </li>
                <li className="child" onClick={() => updateValue("Option 2")}>
                  Option 2
                </li>
                <li className="child" onClick={() => updateValue("Option 3")}>
                  Option 3
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
