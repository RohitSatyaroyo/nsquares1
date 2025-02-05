import React from 'react';
import { 
  FaCogs, 
  FaCamera, 
  FaWrench, 
  FaMicrochip, 
  FaWind, 
  FaPlug, 
  FaMagnet,
  FaPowerOff,
  FaSprayCan,
  FaBarcode
} from 'react-icons/fa';
import { 
  GiGearHammer, 
  GiCircuitry, 
  GiScrew, 
  GiPipes,
  GiWireCoil,

} from 'react-icons/gi';
import { 
  MdSensors, 
  MdElectricalServices,
  MdSettings,
  MdCable 
} from 'react-icons/md';
import { PiNutBold } from "react-icons/pi";
import { FaTemperatureHigh } from "react-icons/fa";
import { TbCylinder } from "react-icons/tb";
import { GiValve } from "react-icons/gi";
import { TbIrregularPolyhedron } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";


const IndustrialCategories = () => {
  const categories = [
    {
      title: 'Motion Control',
      icon: <FaCogs className="w-6 h-6" />,
      color: 'bg-blue-600',
      items: [
        { name: 'Motors', icon: <GiGearHammer /> },
        { name: 'Drives and Controls', icon: <GiCircuitry /> },
        { name: 'IPC', icon: <FaMicrochip /> },
        { name: 'PLC', icon: <MdElectricalServices /> },
        { name: 'Motion Cards', icon: <FaPlug /> }
      ]
    },
    {
      title: 'Vision Control',
      icon: <FaCamera className="w-6 h-6" />,
      color: 'bg-purple-600',
      items: [
        { name: 'Cameras', icon: <FaCamera /> },
        { name: 'CCD', icon: <GiCircuitry /> },
        { name: 'Lens', icon: <FaCogs /> },
        { name: 'Light Source', icon: <MdSensors /> },
        { name: 'Illuminators', icon: <MdSensors /> }
      ]
    },
    {
      title: 'Mechanical',
      icon: <FaWrench className="w-6 h-6" />,
      color: 'bg-emerald-700',
      items: [
        { name: 'Screw Rods', icon: <GiScrew /> },
        { name: 'Linear Guides', icon: <GiScrew /> },
        { name: 'Couplings', icon: <FaWrench /> },
        { name: 'Bearings', icon: <GiScrew /> },
        { name: 'Belts', icon: <FaCogs /> }
      ]
    },
    {
      title: 'Sensing',
      icon: <MdSensors className="w-6 h-6" />,
      color: 'bg-orange-700',
      items: [
        { name: 'Signal Sensors', icon: <MdSensors /> },
        { name: 'Load Cells', icon: <GiCircuitry /> },
        { name: 'Transducers', icon: <MdElectricalServices /> },
        { name: 'Pressure Sensors', icon: <MdSensors /> },
        { name: 'Temperature Sensors', icon: <FaTemperatureHigh /> }
      ]
    },
    {
      title: 'Pneumatic',
      icon: <FaWind className="w-6 h-6" />,
      color: 'bg-red-700',
      items: [
        { name: 'All variant Cylinders', icon: <TbCylinder /> },
        { name: 'Valves', icon: <GiValve /> },
        { name: 'Regulators', icon: <TbIrregularPolyhedron /> },
        { name: 'Filters', icon: <FaFilter /> },
        { name: 'Actuators', icon: <GiPipes /> }
      ]
    },
    {
      title: 'Accessories',
      icon: <FaPlug className="w-6 h-6" />,
      color: 'bg-indigo-600',
      items: [
        { name: 'Cables', icon: <MdCable  /> },
        { name: 'Magnets', icon: <FaMagnet /> },
        { name: 'Switches', icon: <FaPowerOff /> },
        { name: 'Nozzles', icon: <FaSprayCan /> },
        { name: 'Scanners', icon: <FaBarcode /> }
      ]
    }
  ];

  const consumables = [
    {
      title: 'Pneumatic',
      icon: <FaWind className="w-6 h-6" />,
      color: 'bg-cyan-700',
      items: ['Hoses', 'Fittings']
    },
    {
      title: 'Mechanical',
      icon: <MdSettings className="w-6 h-6" />,
      color: 'bg-teal-700',
      items: ['Fasteners', 'Seals']
    },
    {
      title: 'Electrical',
      icon: <MdElectricalServices className="w-6 h-6" />,
      color: 'bg-orange-600',
      items: ['Connectors', 'Wires']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Product Categories</h2>
        <p className="text-gray-400">Explore our comprehensive range of industrial components and solutions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <div className={`${category.color} p-4 flex items-center gap-2`}>
              {category.icon}
              <span className="font-semibold">{category.title}</span>
            </div>
            <div className="p-4">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 py-2">
                  {item.icon}
                  <span className="text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
            <div className="p-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity">
                Explore Products
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Consumables</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consumables.map((category, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`${category.color} p-3 rounded-full`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="space-y-2">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrialCategories;