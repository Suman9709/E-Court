import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Search,
    Plus,
    ChevronDown
} from "lucide-react";

const AdminPanel = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState({
        district: "",
        policeStation: "",
        caseNumber: ""
    });

    // District and Police Station Data
    const districtData = {
        "Munger": [
            "Munger Town Police Station",
            "Kharagpur Police Station",
            "Tarapur Police Station",
            "Bariarpur Police Station",
            "Dharhara Police Station",
            "Jamalpur Police Station",
            "Asarganj Police Station",
            "Tetiha Police Station"
        ],
        "Begusarai": [
            "Begusarai Town Police Station",
            "Barauni Police Station",
            "Teghra Police Station",
            "Balia Police Station",
            "Bachhwara Police Station"
        ],
        "Patna": [
            "Gandhi Maidan Police Station",
            "Kotwali Police Station",
            "Kadamkuan Police Station",
            "Sachivalaya Police Station",
            "Phulwari Sharif Police Station"
        ]
    };

    const handleAddCase = () => {
        navigate("/addnewcase");
    };

    const handleSearchChange = (field, value) => {
        setSearchTerm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSearch = () => {
        console.log("Search terms:", searchTerm);
        // Implement actual search functionality here
    };

    const handleClearSearch = () => {
        setSearchTerm({
            district: "",
            policeStation: "",
            caseNumber: ""
        });
    };

    // Get police stations based on selected district
    const getPoliceStations = () => {
        return searchTerm.district ? districtData[searchTerm.district] || [] : [];
    };

    return (
        <div className="min-h-screen bg-white p-4 lg:p-6">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Case Management System
                    </h1>
                    <p className="text-gray-600">
                        Search and manage criminal cases
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Add Case Button */}
                    <div className="text-center">
                        <button
                            onClick={handleAddCase}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 font-medium mx-auto"
                        >
                            <Plus className="h-5 w-5" />
                            Add New Case
                        </button>
                    </div>

                    {/* Search Section */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                            Search Cases
                        </h2>

                        <div className="space-y-4">
                            {/* District Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select District
                                </label>
                                <div className="relative">
                                    <select
                                        value={searchTerm.district}
                                        onChange={(e) => handleSearchChange("district", e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                                    >
                                        <option value="">Choose District</option>
                                        {Object.keys(districtData).map((district) => (
                                            <option key={district} value={district}>
                                                {district}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            {/* Police Station Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Police Station
                                </label>
                                <div className="relative">
                                    <select
                                        value={searchTerm.policeStation}
                                        onChange={(e) => handleSearchChange("policeStation", e.target.value)}
                                        disabled={!searchTerm.district}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    >
                                        <option value="">
                                            {searchTerm.district ? "Choose Police Station" : "First select district"}
                                        </option>
                                        {getPoliceStations().map((station) => (
                                            <option key={station} value={station}>
                                                {station}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            {/* Case Number Search */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Case Number
                                </label>
                                <input
                                    type="text"
                                    value={searchTerm.caseNumber}
                                    onChange={(e) => handleSearchChange("caseNumber", e.target.value)}
                                    placeholder="Enter case number"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <button
                                    onClick={handleSearch}
                                    disabled={!searchTerm.district && !searchTerm.policeStation && !searchTerm.caseNumber}
                                    className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                                >
                                    <Search className="h-5 w-5" />
                                    Search Case
                                </button>

                                <button
                                    onClick={handleClearSearch}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
                                >
                                    Clear
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;