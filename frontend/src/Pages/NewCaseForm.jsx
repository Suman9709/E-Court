import React, { useState } from "react";

// ============================
// BIHAR DISTRICTS + MUNGER PS
// ============================
const indiaData = {
  Bihar: {
    Araria: [],
    Arwal: [],
    Aurangabad: [],
    Banka: [],
    Begusarai: [],
    Bhagalpur: [],
    Bhojpur: [],
    Buxar: [],
    Darbhanga: [],
    "East Champaran (Motihari)": [],
    Gaya: [],
    Gopalganj: [],
    Jamui: [],
    Jehanabad: [],
    "Kaimur (Bhabua)": [],
    Katihar: [],
    Khagaria: [],
    Kishanganj: [],
    Lakhisarai: [],
    Madhepura: [],
    Madhubani: [],
    Munger: [
      "Munger Sadar",
      "Kotwali Munger",
      "Jamalpur",
      "Bariarpur",
      "Kharagpur",
      "Dharhara",
      "Tarapur",
      "Haveli Kharagpur",
      "Kasimbazar",
    ],
    Muzaffarpur: [],
    Nalanda: [],
    Nawada: [],
    Patna: [],
    Purnia: [],
    Rohtas: [],
    Saharsa: [],
    Samastipur: [],
    Saran: [],
    Sheikhpura: [],
    Sheohar: [],
    Sitamarhi: [],
    Siwan: [],
    Supaul: [],
    Vaishali: [],
    "West Champaran (Bettiah)": [],
  },
};

const NewCaseForm = () => {
  const selectedState = "Bihar";
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const districts = Object.keys(indiaData[selectedState]);
  const policeStations =
    selectedDistrict ? indiaData[selectedState][selectedDistrict] : [];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Register New Case
        </h1>

        <form className="space-y-5">
          {/* ====================== REQUIRED FIELD ====================== */}
          <label className="block font-semibold">
            Case Title <span className="text-red-500">*</span>
          </label>
          <input className="w-full p-3 border rounded-lg" type="text" required />

          <label className="block font-semibold">
            Case Number <span className="text-red-500">*</span>
          </label>
          <input className="w-full p-3 border rounded-lg" type="text" required />

          <label className="block font-semibold">
            FIR Number <span className="text-red-500">*</span>
          </label>
          <input className="w-full p-3 border rounded-lg" type="text" required />

          <label className="block font-semibold">FIR Year</label>
          <input className="w-full p-3 border rounded-lg" type="text" />

          <label className="block font-semibold">
            Court Name <span className="text-red-500">*</span>
          </label>
          <input className="w-full p-3 border rounded-lg" type="text" required />

          <label className="block font-semibold">
            Case Type <span className="text-red-500">*</span>
          </label>
          <input className="w-full p-3 border rounded-lg" type="text" required />

          {/* STATE FIXED TO BIHAR */}
          <label className="block font-semibold">State</label>
          <select
            disabled
            className="w-full p-3 border rounded-lg bg-gray-200 cursor-not-allowed"
          >
            <option>Bihar</option>
          </select>

          {/* DISTRICT */}
          <label className="block font-semibold">
            District <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full p-3 border rounded-lg"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            required
          >
            <option value="">Select District</option>
            {districts.map((d, i) => (
              <option key={i}>{d}</option>
            ))}
          </select>

          {/* POLICE STATION */}
          <label className="block font-semibold">
            Police Station <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full p-3 border rounded-lg"
            disabled={!selectedDistrict}
            required
          >
            <option value="">Select Police Station</option>
            {policeStations.map((ps, i) => (
              <option key={i}>{ps}</option>
            ))}
          </select>

          <label className="block font-semibold">
            Section <span className="text-red-500">*</span>
          </label>
          <input className="w-full p-3 border rounded-lg" type="text" required />

          <label className="block font-semibold">
            Accused Name <span className="text-red-500">*</span>
          </label>
          <input className="w-full p-3 border rounded-lg" type="text" required />

          <label className="block font-semibold">Accused Father's Name</label>
          <input className="w-full p-3 border rounded-lg" type="text" />

          <label className="block font-semibold">Accused Mobile Number</label>
          <input className="w-full p-3 border rounded-lg" type="text" />

          <label className="block font-semibold">Informant Name</label>
          <input className="w-full p-3 border rounded-lg" type="text" />

          <label className="block font-semibold">
            Informant Father's Name
          </label>
          <input className="w-full p-3 border rounded-lg" type="text" />

          {/* ====================== ACCUSED ADDRESS ====================== */}
          <h2 className="font-bold text-lg mt-6">Accused Address</h2>

          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Village"
            type="text"
          />
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Police Station"
            type="text"
          />
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="District"
            type="text"
          />
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Mobile Number"
            type="text"
          />

          {/* ====================== INFORMANT ADDRESS ====================== */}
          <h2 className="font-bold text-lg mt-6">Informant Address</h2>

          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Village"
            type="text"
          />
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Police Station"
            type="text"
          />
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="District"
            type="text"
          />
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Mobile Number"
            type="text"
          />

          <label className="block font-semibold">Case Description</label>
          <textarea
            rows="4"
            className="w-full p-3 border rounded-lg"
          ></textarea>

          {/* SUBMIT BTN */}
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Submit Case
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCaseForm;
