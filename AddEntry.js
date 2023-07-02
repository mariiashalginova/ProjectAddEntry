import './AddEntry.css';
import { useState } from "react";

export default function AddEntry(){
    const continents = [
        { index: 0, name: "Africa" },
        { index: 1, name: "Asia" },
        { index: 2, name: "Europe" },
        { index: 3, name: "North America" },
        { index: 4, name: "South America" },
        { index: 5, name: "Australia" }
      ];
    
    const menuItems = continents.map((continent) => {
        return (
          <option>
            {continent.name}
          </option>
        );
    });

    const timePeriod = [
        { index: 0, value: 'Before 0' },
        { index: 1, value: '0-500' },
        { index: 2, value: '500-1000' },
        { index: 3, value: '1000-1300' },
        { index: 4, value: '1300-1500' },
        { index: 5, value: '1500' },
        { index: 6, value: '1600' },
        { index: 7, value: '1700' },
        { index: 8, value: '1800' },
        { index: 9, value: '1900' },
        { index: 10, value: '2000' }      
    ];
  
    const year = timePeriod.map((year) => {
      return (
        <option>{year.value}</option>
      );
    });

    const typologies = [
            { type: "Apartments blocks" },
            { type: "Bridges" },
            { type: "Cafes and Bars" },
            { type: "Concert halls" },
            { type: "Cultural buildings" },
            { type: "Housing" },
            { type: "Hotels and hospitality" },
            { type: "Industrial buildings" },
            { type: "Installations" },
            { type: "Landscape design" },
            { type: "Monuments" },
            { type: "Museums" },
            { type: "Office buildings" },
            { type: "Pavilions" },
            { type: "Public buildings" },
            { type: "Religious buildings" },
            { type: "Restaurants" },
            { type: "Schools" },
            { type: "Shops" },
            { type: "Warehouses" } 
    ];

    const typology = typologies.map( (o) => {
        return ( 
        <div class="relative flex gap-x-3">
            <div class="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            </div>
            <div class="text-sm leading-6">
                <label for="offers" class="text-gray-500">{o.type}</label>
            </div>
        </div>
        );
    });

    const materials = [
            { type: "Artwork" },
            { type: "Bamboo" },
            { type: "Brick" },
            { type: "Clay" },
            { type: "Ceramics" },
            { type: "Concrete" },
            { type: "Glass" },
            { type: "Marble" },
            { type: "Metal" },
            { type: "Mortar" },
            { type: "Paper" },
            { type: "Plaster" },
            { type: "Plastic" },
            { type: "Rammed earth" },
            { type: "Sand" },
            { type: "Spolia" },
            { type: "Textile" },
            { type: "Tiles" },
            { type: "Waste from other industries" },
            { type: "Wood" }
    ];

    const material = materials.map( (o) => {
        return ( 
        <div class="relative flex gap-x-3">
            <div class="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            </div>
            <div class="text-sm leading-6">
                <label for="offers" class="text-gray-500">{o.type}</label>
            </div>
        </div>
        );
    });

    const [title, setTitle] = useState(" ");
    const updateTitle = (evt) => {
        setTitle(evt.target.value);
    };

    const [name, setName] = useState(" ");
    const updateName = (evt) => {
        setName(evt.target.value);
    };

    const [description, setDescription] = useState(" ");
    const updateDescription = (evt) => {
        setDescription(evt.target.value);
    };

    const [motivation, setMotivation] = useState(" ");
    const updateMotivation = (evt) => {
        setMotivation(evt.target.value);
    };

    const [tech, setTech] = useState(" ");
    const updateTech = (evt) => {
        setTech(evt.target.value);
    };

    const [design, setDesign] = useState(" ");
    const updateDesign = (evt) => {
        setDesign(evt.target.value);
    };

    const [relevance, setRelevance] = useState(" ");
    const updateRelevance = (evt) => {
        setRelevance(evt.target.value);
    };

    const [link, setLink] = useState(" ");
    const updateLink = (evt) => {
        setLink(evt.target.value);
    };
    
    return ( 
    <form className="formie">
        <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Tell us about the project</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">* - obligatory</p>

        <div className="divider"> </div>

        <div class="col-span-full">
            <label for="projectTitle" class="block text-sm font-medium leading-6 text-gray-900">Project title*</label>
            <div class="mt-2">
                <input type="text" name="projectTitle" id="projectTitle" autocomplete="projectTitle" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={title} onChange={updateTitle} />
            </div>
        </div>

        <div className="divider"> </div>

        <div class="sm:col-span-3">
            <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Location*</label>
            <div class="mt-2">
            <select id="location" name="location" autocomplete="location-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                {menuItems}
            </select>
            </div>
        </div>

        <div className="divider"> </div>

        <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Time Period</label>
            <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                {year}
            </select>
            </div>
        </div>

        <div className="divider"> </div>

        <div class="col-span-full">
            <label for="Architects" class="block text-sm font-medium leading-6 text-gray-900">Architects</label>
            <div class="mt-2">
                <input type="text" name="Architects" id="Architects" autocomplete="Architects" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={name} onChange={updateName}/>
            </div>
        </div>

        <div className="divider"> </div>

        <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Short project description*</label>
            <div class="mt-2">
                <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={description} onChange={updateDescription}></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">When, where, why and by whom was the project realized?</p>
        </div>

        <div className="divider"> </div>

        <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">Type of reuse</legend>
            <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                        <input id="reuseType" name="reuseType" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    </div>
                <div class="text-sm leading-6">
                    <label for="comments" class="text-gray-500">Reuse of buildings</label>
                </div>
            </div>

            <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                <label for="candidates" class="text-gray-500">Reuse of building elements</label>
                </div>
            </div>

            <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                <label for="offers" class="text-gray-500">Reuse of building components</label>
                </div>
            </div>

            </div>
        </fieldset>

        <div className="divider"> </div>

        <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">Typology</legend>
            <div class="mt-6 space-y-6">
            {typology}
            </div>
        </fieldset>

        <div className="divider"> </div>

        <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">Materials</legend>
            <div class="mt-6 space-y-6">
            {material}
            </div>
        </fieldset>

        <div className="divider"> </div>

        <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Motivation</label>
            <div class="mt-2">
                <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={motivation} onChange={updateMotivation}></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">Why reuse? Was the motivation driven by pragmatism, ideology or compositional goals?</p>
        </div>

        <div className="divider"> </div>

        <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Technology</label>
            <div class="mt-2">
                <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={tech} onChange={updateTech}></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">What technologies were used or developed for reuse in the project?</p>
        </div>

        <div className="divider"> </div>

        <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Design method</label>
            <div class="mt-2">
                <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={design} onChange={updateDesign}></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">How did reuse influence the design process of the project?</p>
        </div>

        <div className="divider"> </div>

        <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Relevance</label>
            <div class="mt-2">
                <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={relevance} onChange={updateRelevance}></textarea>
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">What role does this project play in the overall context of reuse in architecture?</p>
        </div>

        <div className="divider"> </div>

        <div class="sm:col-span-4">
            <label for="refs" class="block text-sm font-medium leading-6 text-gray-900">Reference</label>
            <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Link</span>
                <input type="text" name="Link" id="Link" autocomplete="Link" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="https:/..." value={link} onChange={updateLink}/>
                </div>
            </div>
        </div>

        <div className="divider"> </div>

        <div class="col-span-full">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Photos</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
                <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                </svg>
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
            </div>

        </div>
        </div>
        </div>
        <div className="divider"> </div>
    </form> );}

