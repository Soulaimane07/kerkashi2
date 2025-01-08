import React, { useState, useRef } from 'react';
import { TfiReload } from "react-icons/tfi";
import { MdClose } from "react-icons/md";
import { GoPlus } from "react-icons/go";

function Converter() {
    const [from, setFrom] = useState("JSON");
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null); // Reference for the file input

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files); // Convert FileList to an array
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Append new files to the existing list
    };

    const handleRemoveFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove the file at the given index
    };

    const handleAddMoreFiles = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the file input dialog
        }
    };

    return (
        <div id='convert' className='px-10 '>
            <div className='bg-zinc-100 mx-auto mb-6 flex justify-between items-center p-1 rounded-lg w-fit'>
                <button
                    onClick={() => setFrom("JSON")& setFiles([])}
                    className={`${from === "JSON" ? "bg-white text-orange-500" : "bg-transparent text-gray-500"} transition-all duration-200 px-6 py-1 font-medium rounded-md`}
                >
                    JSON
                </button>
                <button
                    onClick={() => setFrom("XML") & setFiles([])}
                    className={`${from === "XML" ? "bg-white text-orange-500" : "bg-transparent text-gray-500"} transition-all duration-200 px-6 py-1 font-medium rounded-md`}
                >
                    XML
                </button>
            </div>

            {files.length === 0 && (
                <div className="flex items-center justify-center w-full px-48">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                className="w-8 h-8 mb-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> {from} file
                            </p>
                        </div>
                        <input
                            id="dropzone-file"
                            ref={fileInputRef} // Reference the input element
                            multiple
                            type="file"
                            className="hidden"
                            accept={from === "JSON" ? '.json' : '.xml'}
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
            )}

            {files.length > 0 && (
                <div className="mt-6">
                    <ul className='space-y-2'>
                        {files.map((file, index) => (
                            <li
                                key={index}
                                className="border flex items-center justify-between bg-white rounded-md px-6 py-3 w-full text-gray-700"
                            >
                                <div className='flex items-center space-x-2'>
                                    <img
                                        src={from === "JSON" ? "../json.png" : "../xml.png"}
                                        className='w-8'
                                        alt={`${from} icon`}
                                    />
                                    <p className='font-medium text-md mr-4'> {file.name} </p>
                                    <p className='text-sm opacity-50'> ({(file.size / 1024).toFixed(2)} KB) </p>
                                </div>
                                <button
                                    onClick={() => handleRemoveFile(index)}
                                    className='hover:text-red-500 transition-all opacity-80 hover:opacity-100'
                                >
                                    <MdClose size={20} />
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={handleAddMoreFiles}
                        className="space-x-2 rounded-md font-medium px-6 py-3 w-full flex items-center justify-center bg-opacity-50 hover:bg-white bg-gray-100 border border-transparent hover:border hover:border-zinc-200 text-opacity-60 hover:text-opacity-80 transition-all duration-200 text-gray-700 mt-4"
                    >
                        <GoPlus size={20} />
                        <p>Add more files</p>
                    </button>

                    <div className="flex justify-end mt-6">
                        <button
                            onClick={()=> setFiles([])}
                            type="button"
                            className="hover:text-gray-800 text-gray-600 hover:bg-white border   border-transparent hover:border-gray-200 transition-all focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2"
                        >
                            Clear
                        </button>
                        <button
                            type="button"
                            className="text-white flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 transition-all focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            <TfiReload size={18} />
                            <span> Convert to {from === "JSON" ? "XML" : "JSON"} </span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Converter;
