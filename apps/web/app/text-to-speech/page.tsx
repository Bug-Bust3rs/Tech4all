"use client";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import log_img from '../../public/upload file.png'
import Image from "next/image";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null | undefined>(null);
  const [audioData, setAudioData] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Starting...");

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(

        `${process.env.NEXT_PUBLIC_BACKENDURL}/api/v0.1/upload`,

        formData,

        
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


      const { audioContent } = response.data;


      const audioBlob = new Blob(
        [new Uint8Array(Buffer.from(audioContent, "base64"))],
        { type: "audio/mp3" }
      );
      const audioUrl = URL.createObjectURL(audioBlob);

      setAudioData(audioUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <main>
      <div className="w-full h-screen flex">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] sm:max-w-[900px] rounded-2xl">
          <div className="w-full  h-[450px] hidden md:block ">
            <Image
              className="w-full mt-14 ml-2 h-[380px]"
              src={log_img}
              alt="/"
            />
          </div>
          <div className="p-4 flex flex-col justify-around">
            <form onSubmit={handleFileUpload}>
              <h2 className="text-4xl font-medium text-center mb-10">
                Upload Your <span className="text-violet-700">File</span>
              </h2>
              <div>
                <input
                  className="border p-2 ml-7 mt-4 rounded-xl bg-violet-400"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <button
                className=" w-52 mt-8 ml-20 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 rounded-3xl  bg-violet-700 text-white text-lg font-bold"
                type="submit"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
    </div>
    <div className= "flex items-center justify-center h-screen ">
      {audioData && (
        <audio controls src={audioData} />
      )}
      </div>
    </main>
  );
};

export default FileUpload;
